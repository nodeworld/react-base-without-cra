const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        hot: true,
        liveReload: true,
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Hot Module Replacement',
        }),
      ],
});