const BACKEND_URL = (process.env.API_BACKEND_URL || 'https://www.alsibackend.com/api').replace(/\/+$/, '');

async function handler(request) {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  const url = new URL(request.url);
  const subPath = url.pathname.replace(/^\/api\/?/, '');
  const needsSlash = !subPath.endsWith('/') && !subPath.includes('.');
  const finalSubPath = needsSlash ? `${subPath}/` : subPath;
  const targetUrl = `${BACKEND_URL}/${finalSubPath}${url.search}`;

  const headers = new Headers();
  const auth = request.headers.get('authorization');
  if (auth) headers.set('authorization', auth);
  const contentType = request.headers.get('content-type');
  if (contentType) headers.set('content-type', contentType);

  let body = undefined;
  if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
    try {
      body = await request.arrayBuffer();
    } catch (e) {}
  }

  const isGet = request.method === 'GET';
  const fetchOptions = {
    method: request.method,
    headers,
    body,
    redirect: 'follow',
    ...(isGet ? { next: { revalidate: 120 } } : { cache: 'no-store' }),
  };

  try {
    const res = await fetch(targetUrl, fetchOptions);

    const resBody = await res.arrayBuffer();
    const contentTypeHeader = res.headers.get('content-type') || 'application/json';

    // Optimize array payloads when ?limit= is requested (e.g. blog-entries for home page)
    const limitParam = url.searchParams.get('limit');
    if (isGet && limitParam && contentTypeHeader.includes('application/json')) {
      const limit = parseInt(limitParam, 10);
      if (!isNaN(limit) && limit > 0) {
        try {
          const text = new TextDecoder().decode(resBody);
          const json = JSON.parse(text);
          if (Array.isArray(json)) {
            const sliced = json.slice(0, limit);
            return new Response(JSON.stringify(sliced), {
              status: res.status,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=300',
              },
            });
          }
        } catch (parseErr) {}
      }
    }

    const responseHeaders = {
      'Content-Type': contentTypeHeader,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (isGet && res.status === 200) {
      responseHeaders['Cache-Control'] = 'public, s-maxage=120, stale-while-revalidate=300';
    }

    return new Response(resBody, {
      status: res.status,
      headers: responseHeaders,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 502,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

export { handler as GET, handler as POST, handler as PUT, handler as PATCH, handler as DELETE, handler as OPTIONS };
