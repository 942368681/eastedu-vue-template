const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const Happypack = require('happypack');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/[name].bundle.[hash:8].js',
        publicPath: './'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.vue', '.js', '.json'],
        alias: {
            Utilities: path.resolve(__dirname, 'src/common/utils'),
            Api: path.resolve(__dirname, 'src/common/ajax/api.js')
        }
    },
    module: {
        noParse: /jquery/,
        rules: [
            {
                test: /\.(js|vue)$/,
                use: "eslint-loader",
                enforce: "pre",
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            js: 'happypack/loader?id=babel'
                        }
                    }
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: "Happypack/loader?id=babel",
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10*1024,
                            name: '[name]_[hash:6].[ext]',
                            outputPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name]_[hash:6].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ["html-withimg-loader"]
            }
        ]
    },
    // 插件
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new webpack.DefinePlugin({
            FLAG: JSON.stringify(process.env.mode)
        }),
        new Happypack({
            id: 'babel',
            use: ['babel-loader?cacheDirectory=true']
        })
    ]
};