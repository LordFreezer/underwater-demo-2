const path = require('path');
const webpack = require("webpack");
//////////////////////////////////////////
const WebpackDevServer = require('webpack-dev-server');
/*>>>>>>=============================================<<<<<<*/
const config = require('./webpack.dev.config.js');
/*>>>>>>=============================================<<<<<<*/
const PORT = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(PORT, 'localhost', (err, result) => {
    if (err) {
        return console.log(err);
    }

    console.log(`Listening on port ${PORT}`);
});
//////////////////////////////////////////
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