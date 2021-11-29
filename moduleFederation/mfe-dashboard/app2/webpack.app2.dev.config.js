const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container;

const packageJson = require('./package.json')

module.exports = {
    entry: './src/app2Index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9002/'
    },
    mode: 'development',
    devServer: {
        port: 9002,
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        devMiddleware: {
            index: 'app2Index.html',
            writeToDisk: true
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
            filename: 'app2Index.html',
            description: 'app2Index hello world',
            inject: 'body',
            title: 'stand alone app2 title',
            meta: {
                description: 'stand alone app2 meta tag.'
            },
            minify: false,
        }),
        new ModuleFederationPlugin({
            name: 'NameOfApp2',
            filename: 'remoteEntry.js',
            exposes: {
                './App2Page': './src/components/app2Page/app2Page.js' // name of the module we expose
            },
            // shared: packageJson.dependencies   
        })
    ]
}