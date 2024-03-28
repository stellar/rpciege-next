const withSvgr = require('./config/withSvgr');

const applyMiddleware =
  (...middlewares) =>
  (config) =>
    middlewares.reduce((currentConfig, middleware) => middleware(currentConfig), config);

/** @type {import('next').NextConfig} */
const nextConfig = applyMiddleware(withSvgr)({
  reactStrictMode: false,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  rewrites() {
    return [
      {
        source: '/booklet',
        destination: 'https://assets.rpciege.com/static/booklet.pdf',
      },
      {
        source: '/booklet/:file',
        destination: 'https://assets.rpciege.com/static/:file.pdf',
      },
    ];
  },
});

module.exports = nextConfig;
