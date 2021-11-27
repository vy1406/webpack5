const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        // what files and how to import them
        rules: [
            // Asset #1
            // npm run build -> watch build output console, bundle.js size and its content.
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 3 kilobyes - tells webpack that if the file is larger than three kb, webpack is going to trteat it as asset/resource. and not asset/inline ( which turns into base64)
                        // in order to play with it, 
                    }
                }
            },
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
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'style-loader', 'css-loader', 'sass-loader'
            //     ]
            // }
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
    }
}