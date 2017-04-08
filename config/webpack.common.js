var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: {
        'polyfills': './src/web-store.polyfills.ts',
        'vendor': './src/web-store.vendor.ts',
        'app': './src/web-store.main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: 'tsconfig.json'
                        }
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!less-loader'})
            }
        ]
    },
    // TODO: investigate how to use css files
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new ExtractTextPlugin("[name].css")
    ]
};