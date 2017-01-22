var webpack = require('webpack');

module.exports = {

    entry: {
        'vendor': './src/web-store.vendor.ts',
        'app': './src/web-store.main.ts'
    },

    module: {
        loaders: []
    },

    plugins: []
};