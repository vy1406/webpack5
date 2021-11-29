const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container;
const DefinePlugin = require('webpack').DefinePlugin

const packageJson = require('./package.json')

const PORT = 9003
module.exports = {
    entry: './src/dashboard.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: `http://localhost:${PORT}/`
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
            title: 'stand alone dashboard title',
            filename: 'dashboard.html',
            description: 'dashboard description',
            inject: 'body',
        }),
        new ModuleFederationPlugin({
            name: 'App',
            filename: 'remoteEntry.js',
            remotes: {
                NameOfApp1: 'NameOfApp1@http://localhost:9001/remoteEntry.js',
                NameOfApp2: 'NameOfApp2@http://localhost:9002/remoteEntry.js',
            }, 
            // shared: packageJson.dependencies     
        }),
        new DefinePlugin({
            'process.env': {
                'myEnv': JSON.stringify('this is my env...'),
                'PORT': JSON.stringify(PORT)
            }
        })
    ]
}