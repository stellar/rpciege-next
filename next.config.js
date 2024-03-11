const withSvgr = require('./config/withSvgr');

const applyMiddleware =
  (...middlewares) =>
  (config) =>
    middlewares.reduce((currentConfig, middleware) => middleware(currentConfig), config);

/** @type {import('next').NextConfig} */
const nextConfig = applyMiddleware(withSvgr)({
  reactStrictMode: false,
});

module.exports = nextConfig;
