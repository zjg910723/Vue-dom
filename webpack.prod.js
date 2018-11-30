const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = () => {
    return {
        //入口文件配置
        entry: ["babel-polyfill", path.join(__dirname, "views", "index.js")],
        //出口文件配置
        output: {
            path: path.resolve(__dirname, "h5Web"),
            filename: 'scripts/[name].js',
            chunkFilename: 'scripts/[name].[chunkhash].js',
            publicPath: '',
        },
        module: {
            rules: [{
                    test: /\.(css|scss)$/,
                    // use: ["style-loader", "css-loader", "postcss-loader"],
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "postcss-loader"],
                    }),

                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.(jsx|js)$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|eot|woff2|woff|ttf|svg|jpg|gif|mp3)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]",
                        }
                    }]
                }

            ]
        },
        plugins: [
            new ExtractTextPlugin("stylesheets/style.css"),
            new HtmlWebpackPlugin({
                inject: true,
                filename: 'index.html',
                template: path.resolve(__dirname, "index.html"),
                minify: { //压缩HTML文件
                    removeComments: true, //移除HTML中的注释
                    collapseWhitespace: true //删除空白符与换行符
                }
            }),
            // keep module.id stable when vendor modules does not change
            new webpack.HashedModuleIdsPlugin(),
            // enable scope hoisting
            new webpack.optimize.ModuleConcatenationPlugin(),
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    }
                },
            }),

        ],
        resolve: {
            extensions: [".js", ".vue"],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                entry_dir: path.resolve(__dirname),
                modules: path.resolve(__dirname, 'node_modules'),
            }
        },
        mode: "production",
        performance: {
            hints: false
        }
    }

}