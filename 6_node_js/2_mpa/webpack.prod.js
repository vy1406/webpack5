const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'left-page': './src/leftIndex',
        'right-page': './src/rightIndex',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/static/'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 1000,
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 1000 * 1024 // 3 * 1024 || 1000 * 1024
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
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
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'right-page.html',
            title: 'Jenny Bio',
            chunks: ['right-page'],
            meta: {
                description: 'Does each of us have a destiny or we just floating around accidental-like on a breeze. Maybe its both..'
            },
            minify: false,
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            filename: 'left-page.html',
            title: 'Lieutenant Dan Taylor Bio',
            chunks: ['left-page'],
            meta: {
                description: 'Does each of us have a destiny or we just floating around accidental-like on a breeze. Maybe its both..'
            },
            minify: false,
            inject: 'body',
        })
    ]
}