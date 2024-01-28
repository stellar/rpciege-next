const path = require('path');

const defaultOptions = {
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupIds: false,
            removeHiddenElems: false,
            removeViewBox: false,
          },
        },
      },
    ],
  },
};

module.exports = function withSvgr(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          exclude: path.resolve(__dirname, '../src/assets/icons'),
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: /url/ }, // exclude if *.svg?url
          include: path.resolve(__dirname, '../src/assets/icons'), // include if in icons folder
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                ...defaultOptions,
                icon: true,
              },
            },
          ],
        }
      );

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      } else {
        return config;
      }
    },
  };
};
