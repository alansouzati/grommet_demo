var gulp      = require('gulp'),
  babelify    = require('babelify'),
  source      = require('vinyl-source-stream'),
  browserify  = require('browserify'),
  connect	  = require('gulp-connect');
  sass = require('gulp-sass');
  concat = require('gulp-concat');


gulp.task('browserify', () => {
  return browserify('index.js')
    .transform('babelify', {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist'))
});

gulp.task('scss', function () {
  // I would recommend using only one theme at a time
  // this will improve your build time and
  // I dont think you will be using more than one theme at once
  return gulp.src('./node_modules/grommet/scss/vanilla/index.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        './node_modules',
        './node_modules/grommet/node_modules'
      ]
    }).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist'
  });
});

gulp.task('default',['browserify', 'scss', 'connect'], () => {
  return gulp.watch('./src/**/*.js', ['browserify']);
});
