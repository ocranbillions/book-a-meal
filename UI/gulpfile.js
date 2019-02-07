const gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync").create(),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssImport = require("postcss-import"),
  mixins = require("postcss-mixins"),
  webpack = require("webpack");

gulp.task('styles', postcss_to_css);

gulp.task('scripts', bundle_scripts);

gulp.task('watch', live_edit);

//Converts postcss/scss to css
function postcss_to_css() {
  return gulp
    .src("./assets/styles/main.css")
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on("error", function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./temp/styles"));
}

//Converts & bundles es6 to es5
function bundle_scripts(done) {
  webpack(require("./webpack.config.js"), (err, stats) => {
    if (err)
      console.log(err.toString());

    console.log(stats.toString());
  });
  done();
};


function inject_css() {
  return gulp.src("./temp/styles/main.css").pipe(browserSync.stream());
}

function reload_browser(done) {
  browserSync.reload();
  done();
}


function live_edit(done) {

  browserSync.init({
    //notify: false,
    server: {
      baseDir: "./"
    }
  });

  watch("./*.html", reload_browser);
  watch("./assets/styles/**/*.css", gulp.series(postcss_to_css, inject_css));
  watch("./assets/styles/**/*.pcss", gulp.series(postcss_to_css, inject_css));
  watch("./assets/scripts/**/*.js", gulp.series(bundle_scripts, reload_browser));

  done();
};




