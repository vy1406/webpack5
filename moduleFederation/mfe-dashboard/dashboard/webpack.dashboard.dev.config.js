const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container;
const DefinePlugin = require('webpack').DefinePlugin

const packageJson = require('./package.json')
const PORT = 9003

module.exports = {
    entry: './src/dashboard.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: `http://localhost:${PORT}/`
    },
    mode: 'development',
    devServer: {
        port: PORT,
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        devMiddleware: {
            index: 'dashboard.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Dashboard',
            filename: 'dashboard.html',
            description: 'dashboard hello world',
            inject: 'body'
        }),
        new ModuleFederationPlugin({
            name: 'App',
            filename: 'remoteEntry.js',
            remotes: {
                NameOfApp1: 'NameOfApp1@http://localhost:9001/remoteEntry.js',
                NameOfApp2: 'NameOfApp2@http://localhost:9002/remoteEntry.js',
            },
            shared: packageJson.dependencies   
        }),
        new DefinePlugin({
            'process.env': {
                'myEnv': JSON.stringify('this is my env...'),
                'PORT': JSON.stringify(PORT)
            }
        })
    ]
}