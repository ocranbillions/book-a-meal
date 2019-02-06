const gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync").create(),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssImport = require("postcss-import"),
  mixins = require("postcss-mixins");

gulp.task("styles", function () {
  return gulp
    .src("./assets/styles/main.css")
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on("error", function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./temp/styles"));
});

gulp.task("watch", function () {
  browserSync.init({
    //notify: false,
    server: {
      baseDir: "./"
    }
  });

  watch("./*.html", function () {
    browserSync.reload();
  });

  watch("./assets/styles/**/*.css", function () {
    gulp.start("cssInject");
  });

  watch("./assets/styles/**/*.pcss", function () {
    gulp.start("cssInject");
  });
});

gulp.task("cssInject", ["styles"], function () {
  return gulp.src("./temp/styles/main.css").pipe(browserSync.stream());
});
