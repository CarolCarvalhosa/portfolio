// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

module.exports = function override(config, env) {
  config = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        process: 'process/browser',
        assert: require.resolve('assert/'),
        util: require.resolve('util/'),
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
        zlib: require.resolve('browserify-zlib'),
      },
    },
    plugins: [
      ...config.plugins,
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
    ],
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
  };

  return {
    ...config,
    node: undefined,
  };
};
