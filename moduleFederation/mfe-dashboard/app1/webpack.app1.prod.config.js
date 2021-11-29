const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container;

const packageJson = require('./package.json')

module.exports = {
    entry: './src/app1Index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9001/'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 1000,
            automaticNameDelimiter: '_'
        }
    },
    module: {
        rules: [
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ 
            filename: 'app1Index.html',
            description: 'app1Index hello world',
            inject: 'body',
            title: 'stand alone app1 title',
            meta: {
                description: 'stand alone app1 meta tag.'
            },
            minify: false,
        }),
        new ModuleFederationPlugin({
            name: 'NameOfApp1',
            filename: 'remoteEntry.js',
            exposes: {
                './App1Page': './src/components/app1Page/app1Page.js' // name of the module we expose
            },
            shared: packageJson.dependencies   
        })
    ]
}