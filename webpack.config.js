const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackDevServer = require("webpack-dev-server");



module.exports = () => {
    return {
        //入口文件配置
        entry: ["babel-polyfill", path.join(__dirname, "views", "index.js")],
        //出口文件配置
        output: {
            path: path.resolve(__dirname, "assets"),
            filename: 'scripts/[name].js',
            publicPath: '/'
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
                        loader: "url-loader",
                        options: {
                            name: "images/[name].[ext]",
                        }
                    }]
                }

            ]
        },
        plugins: [
            new ExtractTextPlugin("stylesheets/style.css"),
            // new UglifyJSPlugin()
            new HtmlWebpackPlugin({
                inject: true,
                filename: 'index.html',
                template: path.resolve(__dirname, "index.html")
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
        devServer: {
            host: 'localhost',
            port: 3298,
            historyApiFallback: false,
            // hot: false,
            // inline: false,
            proxy: {
                '/VendingSystem': {
                    target: 'https://test.nofetel.com/', //需要跨域的域名
                    changeOrigin: true,

                    secure: false,
                    // pathRewrite: {
                    //     '^/VendingSystem': ''
                    // },
                }
            }
        },
        mode: "development",
        performance: { hints: false }
    }

}