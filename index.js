const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  // هذا التعديل سيجعل السيرفر يوجه الطلب فوراً لـ Google Gemini
  const proxy = createProxyMiddleware({
    target: 'https://generativelanguage.googleapis.com',
    changeOrigin: true,
    pathRewrite: (path) => path, // سيمرر المسار كما هو
  });

  return proxy(req, res);
};
