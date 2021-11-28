const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../../dist'),
        publicPath: '/static/'
    },
    mode: 'production',
    module: {
        // what files and how to import them
        rules: [
            // Asset #1
            // npm run build -> watch build output console, bundle.js size and its content.
            // {
            //     test: /\.(png|jpg)$/,
            //     type: 'asset',
            //     parser: {
            //         dataUrlCondition: {
            //             maxSize: 3 * 1024 // 3 kilobyes - tells webpack that if the file is larger than three kb, webpack is going to trteat it as asset/resource. and not asset/inline ( which turns into base64)
            //             // in order to play with it, 
            //         }
            //     }
            // },
            // Asset #2 Asset/source
            // npm run build -> watch build output console, bundle.js size and its content.
            {
                test: /\.txt/,
                type: 'asset/source',
            },
            /*
            // Asset #3 Asset/resource
            // npm run build -> watch build output console, bundle.js size and its content.
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            }
            */
            /*
            // Asset #4 Asset/inline
            // npm run build -> watch build output console, bundle.js size and its content.
            {
                test: /\.(png|jpg)$/,
                type: 'asset/inline',
            }
            */
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
        // new UglifyJsPlugin(),
        // new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns: [
        //         '**/*', // default
        //         path.join(process.cwd(), 'build/**/*')
        //     ]
        // }),
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