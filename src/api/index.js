const getBaseURL = () => {
  if (typeof window !== 'undefined') {
    return '/api/';
  }
  return process.env.API_BACKEND_URL || 'https://www.alsibackend.com/api/';
};

const normalizeUrl = (url) => {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    // In browser: strip backend origin if present, always route through /api/ to prevent CORS errors
    let clean = url.replace(/^https?:\/\/(www\.)?alsibackend\.com\/api\/?/i, '');
    clean = clean.replace(/^\/?(api\/)?/, '');
    if (!clean.endsWith('/') && !clean.includes('?') && !clean.includes('.')) {
      clean += '/';
    }
    return `/api/${clean}`;
  }

  // Server-side
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const base = process.env.API_BACKEND_URL || 'https://www.alsibackend.com/api/';
  const cleanBase = base.replace(/\/+$/, '');
  let cleanPath = url.replace(/^\/?(api\/)?/, '');
  if (!cleanPath.endsWith('/') && !cleanPath.includes('?') && !cleanPath.includes('.')) {
    cleanPath += '/';
  }
  return `${cleanBase}/${cleanPath}`;
};

const getHeaders = (customHeaders = {}) => {
  const headers = { ...customHeaders };
  if (typeof window !== 'undefined') {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    } catch (e) {}
  }
  return headers;
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const apiClient = {
  async get(url, config = {}) {
    const fullUrl = normalizeUrl(url);
    const maxAttempts = 3;
    let lastError = null;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const res = await fetch(fullUrl, {
          method: 'GET',
          headers: getHeaders(config.headers),
        });
        if (!res.ok) {
          const error = new Error(`Request failed with status ${res.status}`);
          error.response = res;
          throw error;
        }
        const data = await res.json();
        return { data, status: res.status, headers: res.headers };
      } catch (err) {
        lastError = err;
        if (attempt < maxAttempts) {
          await wait(300 * attempt);
        }
      }
    }
    throw lastError;
  },

  async post(url, data, config = {}) {
    const fullUrl = normalizeUrl(url);
    const headers = getHeaders(config.headers);
    let body;
    if (typeof FormData !== 'undefined' && data instanceof FormData) {
      body = data;
    } else {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(data);
    }
    const res = await fetch(fullUrl, {
      method: 'POST',
      headers,
      body,
    });
    if (!res.ok) {
      const error = new Error(`Request failed with status ${res.status}`);
      error.response = res;
      throw error;
    }
    const resData = await res.json();
    return { data: resData, status: res.status, headers: res.headers };
  },

  async put(url, data, config = {}) {
    const fullUrl = normalizeUrl(url);
    const headers = getHeaders(config.headers);
    let body;
    if (typeof FormData !== 'undefined' && data instanceof FormData) {
      body = data;
    } else {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(data);
    }
    const res = await fetch(fullUrl, {
      method: 'PUT',
      headers,
      body,
    });
    if (!res.ok) {
      const error = new Error(`Request failed with status ${res.status}`);
      error.response = res;
      throw error;
    }
    const resData = await res.json();
    return { data: resData, status: res.status, headers: res.headers };
  },

  async delete(url, config = {}) {
    const fullUrl = normalizeUrl(url);
    const res = await fetch(fullUrl, {
      method: 'DELETE',
      headers: getHeaders(config.headers),
    });
    if (!res.ok) {
      const error = new Error(`Request failed with status ${res.status}`);
      error.response = res;
      throw error;
    }
    const resData = await res.json().catch(() => ({}));
    return { data: resData, status: res.status, headers: res.headers };
  },
};

export default apiClient;
