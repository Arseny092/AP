var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                use: ['babel-loader'],
            },

            {
                test: /\.(html)$/,
                use: ['html-loader'],
            },

            {
                test: /\.html$/,
                loader: ['html-loader'],
            },

            {
                test: /\.(jpg|png)$/,
                use: ['file-loader'],
            },

            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },

            {
                test: /.less$/,
                loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'less-loader'],
                }),
            },
            {
                test: /\.svg/,
                use: ['svg-url-loader'],

            },
        ],
    },

    devServer: {
        contentBase: BUILD_DIR,
        historyApiFallback: true,
        //hot: true
    },

    plugins: [
        new ExtractTextPlugin('styles.css', {allChunks: true}),

        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
            cache: true,
        }),

    ],

    };

module.exports = config;