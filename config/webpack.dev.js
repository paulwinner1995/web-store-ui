var path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'http://localhost:8091',
        filename: '[name].js'
    }
});