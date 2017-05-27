/**
 * Created by vinojv on 02/11/16.
 */
var fs = require('fs');
var path = require('path');

require('babel-polyfill');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const WebpackChunkHash = require("webpack-chunk-hash");

const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';

const jsSourcePath = [
    path.join(__dirname + '/src'),
    path.join(__dirname + '/lib'),
];
const buildPath = path.join(__dirname, './__build__');
const sourcePath = path.join(__dirname, './');

var host = (process.env.HOST || 'localhost');
var port = (process.env.PORT) || 8080;

module.exports = {
    context: jsSourcePath[0],
    entry: {
        client: [
            `webpack-dev-server/client?http://${host}:${port}`,
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
        ],
        js: 'index.js',
        vendor: [
//            'whatwg-fetch',
            'babel-polyfill',
//            'immutable',
            'react-dom',
//            'react-redux',
//            'react-router',
            'react',
//            'redux',
        ],
    },
    output: {
        path: buildPath,
        filename: "[name].js",
        publicPath: `http://${host}:${port}/`,
        filename: "[name].[chunkhash].js",
        chunkFilename: "[name].[chunkhash].js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
//                include: path.resolve(__dirname, './src'),
            },
            {
                test: /\.(otf|png|gif|jpeg(2)?)(\?[a-z0-9]+)?$/,
                use: 'url-loader',
            },
            {
                test: /(global|flaticon)\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },

                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.css$/,
                exclude: [/global.css/, /flaticon.css/],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },

                    },
                    'postcss-loader',
                ],
            },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=image/svg+xml" },
        ],
    },
    resolve: {
        extensions: ['.css', '.json', '.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            ...jsSourcePath,
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor-[hash].js',
        }),
//
        new ChunkManifestPlugin({
            filename: "chunk-manifest.json",
            manifestVariable: "webpackManifest",
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv),
            },
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(sourcePath, './index.html'),
            path: buildPath,
//            favicon: './images/favicon.ico',
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: [
                            'last 3 version',
                            'ie >= 10',
                        ],
                    }),
                ],
                context: sourcePath,
            },
        }),
    ],
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        "lodash": {
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: "_",
        },
    },
};