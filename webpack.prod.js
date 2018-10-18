const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config_argv = process.env.npm_config_argv;
var fileName = JSON.parse(config_argv).original[0].split(":")[1];

module.exports = () => {
    return {
        //入口文件配置
        entry: ["babel-polyfill", path.join(__dirname, `src/views/${fileName}`, "index.js")],
        //出口文件配置
        output: {
            path: path.resolve(__dirname, `assets/${fileName}`),
            filename: `scripts/[name].js`,
            chunkFilename: `scripts/[name].js`,
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
                        loader: "url-loader",
                        options: {
                            name: `images/[name].[ext]`,
                        }
                    }]
                }

            ]
        },
        plugins: [
            new ExtractTextPlugin(`stylesheets/style.css`),
            new HtmlWebpackPlugin({
                inject: true,
                filename: 'index.html',
                template: path.resolve(__dirname, `src/views/${fileName}/index.html`),
                minify: { //压缩HTML文件
                    removeComments: true, //移除HTML中的注释
                    collapseWhitespace: true //删除空白符与换行符
                }
            }),
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
        performance: { hints: false }
    }

}