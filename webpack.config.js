const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const WebpackConfig = {
  entry: APP_DIR + '/index.js',

  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'BpanelUx',
  },

  externals: {
    // List any peer dependencies here
    react: 'umd react',
    'react-dom': 'umd react-dom',
    'react-router-dom': 'umd react-router-dom',
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: APP_DIR,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
        ],
      },
    ],
  },
};

// webpack production config
if (process.env.NODE_ENV === 'production') {
  WebpackConfig.externals = {
    react: 'react',
    'react-dom': 'react-dom',
  };
  WebpackConfig.plugins = [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
      },
      compress: {
        warnings: false,
        screw_ie8: true,
      },
      comments: false,
    }),
  ];
}

module.exports = WebpackConfig;
