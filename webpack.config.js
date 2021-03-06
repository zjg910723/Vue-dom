const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = () => {
    return {
        //入口文件配置
        entry: ["babel-polyfill", path.join(__dirname, "views", "index.js")],
        //出口文件配置
        output: {
            path: path.resolve(__dirname, "assets"),
            filename: 'scripts/[name].js',
            chunkFilename: 'scripts/[name].[chunkhash].js',
            publicPath: '/',
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
            historyApiFallback: true,
            // hot: false,
            // inline: false,
            proxy: {
                '/api': {
                    target: 'http://192.168.1.215:6200/', //需要跨域的域名
                    pathRewrite: { '^/api': '' }
                }
            }
        },
        mode: "development",
        performance: { hints: false }
    }

}