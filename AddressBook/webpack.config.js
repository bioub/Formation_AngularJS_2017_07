const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ['./src/app/app.module'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {
              targets: {
                browsers: ['IE 11', 'Firefox ESR', 'last 2 versions']
              }
            }]]
          }
        }
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader/url" },
          { loader: "file-loader" },
          { loader: "postcss-loader" }
        ]
      }
    ]
  }
};