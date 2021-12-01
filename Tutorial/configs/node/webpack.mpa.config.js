const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    entry: {
        'app1': './src/indexes/mpa/app1.js',
        'app2': './src/indexes/mpa/app2.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../../dist'),
        publicPath: '/static/'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 1000
        }
    },
    module: {
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
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', // default
                path.join(process.cwd(), 'dist/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'app1.html',
            chunks: ['app1'],
            description: 'hello app1', 
            inject: 'body',
            title: 'Hello app1 page title',
            meta: {
                description: 'addiotional meta tag.'
            },
            minify: false,
        }),
        new HtmlWebpackPlugin({ 
            filename: 'app2.html',
            chunks: ['app2'],
            description: 'hello app2',
            inject: 'body',
            title: 'app2 page title',
            meta: {
                description: 'addiotional meta tag.'
            },
            minify: false,
        }),
    ]
}