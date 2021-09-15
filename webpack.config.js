'use strict'

const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src')
        }
    },
    entry: [
        require.resolve(`webpack-dev-server/client`),
        path.resolve(__dirname, "./src/index.js")
    ].filter(Boolean),
    devServer: {
        hot: true,
        port: 4000,
        host: "localhost",
        watchOptions: {
            poll: true,
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                { from: './public', to: './' },
            ],
        }),
    ]
};