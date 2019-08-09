const baseConfig = require('./webpack.base.js');
const {smart} = require('webpack-merge');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = smart(baseConfig, {
    watch: false,
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 500, 
        ignored: /node_modules/
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
                canPrint: true
            }),
            new UglifyJsPlugin({
                exclude: /\.min\.js$/,
                cache: true, 
                parallel: true,
                sourceMap: true
            })
        ],
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5, 
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                default: {
                    priority: -20,
                    chunks: 'initial', 
                    minSize: 0, 
                    minChunks: 2, 
                    reuseExistingChunk: true 
                },
                vendors: {
                    priority: -10,
                    test: /node_modules/,
                    name: "vendors",
                    chunks: "initial"
                }
            }
        }
    },
    plugins: [
        new cleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            hash: true,
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        })
    ],
    mode: 'production'
});