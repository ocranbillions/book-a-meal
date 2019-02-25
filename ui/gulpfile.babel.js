import gulp from 'gulp';
import watch from 'gulp-watch';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssvars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssImport from 'postcss-import';
import mixins from 'postcss-mixins';
import webpack from 'webpack';
import bS from 'browser-sync';

const browserSync = bS.create();

// Run all tasks
gulp.task('styles', postcssToCSS);

gulp.task('scripts', bundleScripts);

gulp.task('watch', liveEdit);

// Converts scss/pcss to css
function postcssToCSS() {
  return gulp
    .src('./assets/styles/main.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', (errorInfo) => {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./temp/styles'));
}

// Converts & bundles es6 to es5
function bundleScripts(done) {
  webpack(require('./webpack.config.js'), (err, stats) => {
    if (err) console.log(err.toString());
    console.log(stats.toString());
  });
  done();
}

function injectCss() {
  return gulp.src('./temp/styles/main.css').pipe(browserSync.stream());
}

function reloadBrowser() {
  browserSync.reload();
}

function liveEdit(done) {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './',
    },
  });

  watch('./*.html', reloadBrowser);
  watch('./temp/**/*.html', reloadBrowser);
  watch('./assets/styles/**/*.css', gulp.series(postcssToCSS, injectCss));
  watch('./assets/styles/**/*.scss', gulp.series(postcssToCSS, injectCss));
  watch('./assets/scripts/**/*.js', gulp.series(bundleScripts, reloadBrowser));

  done();
}
