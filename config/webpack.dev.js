var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('build'),
        publicPath: 'http://localhost:8094/',
        filename: '[name].js'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        proxy: {
            '/api': 'http://localhost:8081'
        }
    }
});