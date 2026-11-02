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

  try {
    const res = await fetch(targetUrl, {
      method: request.method,
      headers,
      body,
      redirect: 'follow',
      cache: 'no-store',
    });

    const resBody = await res.arrayBuffer();
    const contentTypeHeader = res.headers.get('content-type') || 'application/json';

    return new Response(resBody, {
      status: res.status,
      headers: {
        'Content-Type': contentTypeHeader,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
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
