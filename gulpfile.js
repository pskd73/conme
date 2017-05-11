var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var babelify = require("babelify");

var externalLibraries = [
    "react",
    "react-dom"
];

var buildVendor = function () {
    browserify({
        require: externalLibraries,
        debug: true,
    })
    .bundle()
    .on("error", function (err) {
        console.log(err);
    })
    .pipe(source("vendor.js"))
    .pipe(gulp.dest("./public/build"))
    .on("end", function () {
        console.log("Vendor build created.");
    });
}

var build = function () {
    var bundle = browserify({
        entries: "./components/main.js",
        debug: true,
    });

    for (var i=0; i < externalLibraries.length; i++){
        bundle.external(externalLibraries[i]);
    }

    bundle.transform("babelify", { presets: ["es2015", "react"] })
    .bundle()
    .on("error", function (error) {
        console.log(error);
    })
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./public/build"))
    .on("end", function () {
        console.log("Build created.")
    });
}

gulp.task("build", function () {
    build();
});

gulp.task("watch", function () {
    buildVendor();
    build();
    gulp.watch(["./components/**/*.js"], ["build"]);
});

gulp.task("default", function () {
    buildVendor();
    build();
});
