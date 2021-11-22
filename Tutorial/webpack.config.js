const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none',
    module: {
        // what files and how to import them
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            }
        ]
    }
}