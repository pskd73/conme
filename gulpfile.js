var babelify = require("babelify");
var browserify = require("browserify");
var gulp = require("gulp");
var webpack = require("gulp-webpack");
var path = require("path");
var source = require("vinyl-source-stream");
var nodeExternals = require("webpack-node-externals");
var _webpack = require("webpack");

var externalLibraries = [
    "react",
    "react-dom",
    "material-ui"
];

var buildVendor = function () {
    gulp.src("components/main.js")
        .pipe(webpack({
            entry: {
                vendor: externalLibraries,
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: "babel-loader",
                        exclude: [ path.resolve(__dirname, "node_modules") ]
                    }
                ]
            },
            output: {
                filename: "[name].js"
            },
            plugins: [
                new _webpack.optimize.CommonsChunkPlugin({
                    name: "vendor",
                    filename: "vendor.js"
                })
            ]
        }))
        .pipe(gulp.dest("public/build"));
}

var build = function () {
    gulp.src("components/main.js")
        .pipe(webpack({
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: "babel-loader"
                    }
                ]
            },
            output: {
                filename: "[name].js"
            }
        }))
        .pipe(gulp.dest("public/build"));
}

gulp.task("build", function () {
    build();
});

gulp.task("watch", function () {
    // buildVendor();
    build();
    gulp.watch(["./components/**/*.js"], ["build"]);
});

gulp.task("default", function () {
    // buildVendor();
    build();
});
