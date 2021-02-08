const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//最新的vue-loader 中 vueLoaderPlugin 插件的位置有所变化
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const webpack = require('webpack')
const { CleanWebpackPlugin } =require('clean-webpack-plugin')
const WebpackDevServer = require('webpack-dev-server')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCssAssetsWebpackPlugin =require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin =require('terser-webpack-plugin')
module.exports = {
    mode: 'development', //环境模式
    entry: path.resolve(__dirname, './src/main.js'),//打包入口
    output: {
        path: path.resolve(__dirname, 'dist'), //打包出口
        // filename: 'js/[name].js' //打包完后的静态资源文件名
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.ts$/,
            //     use: [
            //       'ts-loader'
            //     ]
            // },
            {
                test: '/\.js$/',
                exclude: /node_modules/, // 不编译node_modules下的文件
                loader: 'babel-loader'
                // options: {
                //     presets:['@babel/preset-env']
                // }
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: '/\.css$/',
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    //  MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif|bmp)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]'
                            }
                        }
                    }
                }
            },
            {
                test: /\.(mp4|ogg|mp3|wav)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]'
                            }
                        }
                    }
                }
            },
            // {
            //     loader: 'image-webpack-loader',
            //     options: {
            //         mozjpeg: {
            //             progressive: true,
            //         },
            //         optipng: {
            //             enabled: false,
            //         },
            //         pngquant: {
            //             quality: [0.65, 0.90],
            //             speed: 4
            //         },
            //         gifsicle: {
            //             interlaced: false,
            //         },
            //         webp: {
            //             quality: 75
            //         }
            //     }
            // }
                
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'), //我们要使用的html模板地址
            filename: 'index.html', //打包后输出的文件名
            title: '手搭Webpack5+Vue3开发环境', // index.html 模板内，通过 <%= htmlWebpackPlugin.options.title %> 拿到的变量
            // minify: {
            //     collapseWhitespace: true,//去掉空格
            //     removeComments: true,//去掉注释
            // }
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //  new OptimizeCssAssetsWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        publicPath:'./',
        port: 8081,
        hot: true,
        open: true,
        proxy: {
            'api': {
                target: 'localhost:9090'
            }
        }
    }
}