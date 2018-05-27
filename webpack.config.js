const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            inject: "body"
        })
    ],
    module: {
        rules: [
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(sass|scss)$/, use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}] }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};