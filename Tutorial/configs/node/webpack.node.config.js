const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    entry: './src/indexes/node/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../../dist'),
        publicPath: '/static/'
    },
    mode: 'production',
    module: {
        // what files and how to import them
        rules: [

            {
                test: /\.txt/,
                type: 'asset/source',
            },
            
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ 
            inject: 'body',
            title: 'Hello world page title',
            filename: 'myIndex.html',
            meta: {
                description: 'addiotiona meta tag.'
            }
        }),
    ]
}