var path = require("path");
var webpack = require("webpack");
var SplitByPathPlugin = require('webpack-split-by-path');

module.exports = {
    entry: {
        main: "./components/main.js"
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, "build/"),
        publicPath: "http://localhost:3000/build/"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function (module) {
               return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: ["react-hot-loader", "babel-loader"],
        }]
    },
    devtool: "source-map",

}
