const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/app1Index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9001/'
    },
    mode: 'development',
    devServer: {
        port: 9001,
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        devMiddleware: {
            index: 'app1Index.html',
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
                './App1ButtonModule': './src/components/component1/component1.js' // name of the module we expose
            }
        })
    ]
}