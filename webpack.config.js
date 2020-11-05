const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    mode: isDevelopment ? 'development' : 'production',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ],
    },
    plugins: [
        isDevelopment && new ReactRefreshPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ].filter(Boolean)
};
