managing different webpack.configs

webpack.prod 
    we removed the TerserPlugin


webpack.dev
    removed contenthash, we dont want hashing
    removed MiniCssExtractPlugin, no need to minify

show package json