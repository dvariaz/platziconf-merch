const path = require('path');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: '[name]_[local]_[hash:base64:5]',
    importLoaders: 2,
    sourceMap: false, // turned off as causes delay
  },
};
const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: 'global',
    importLoaders: 2,
    sourceMap: false, // turned off as causes delay
  },
};
const PostCSSLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      sourceMap: false, // turned off as causes delay
      plugins: [tailwindcss('./tailwind.config.js'), autoprefixer({})],
    },
  },
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          CSSLoader,
          PostCSSLoader,
          'sass-loader',
        ],
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          CSSModuleLoader,
          PostCSSLoader,
          'sass-loader',
        ],
      },
    ].filter(Boolean),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ].filter(Boolean),
};
