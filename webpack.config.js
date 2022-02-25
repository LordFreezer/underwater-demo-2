const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        //     hot: true,
        open: true
    },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpe?g|png$/,
                exclude: /node_modules/,
                use: ["url-loader", "file-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        // new webpack.HotModuleReplacementPlugin()
    ]
};