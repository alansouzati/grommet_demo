var gulp      = require('gulp'),
  babelify    = require('babelify'),
  source      = require('vinyl-source-stream'),
  browserify  = require('browserify'),
  connect	  = require('gulp-connect');
  sass = require('gulp-sass');		
  concat = require('gulp-concat');


gulp.task('browserify', () => {
  browserify('src/index.js')
    .transform('babelify', {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/src'))
});

gulp.task('scss', function () {
  return gulp.src('./node_modules/grommet/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/src/style'));
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('default',['browserify', 'connect'], () => {
  return gulp.watch('./src/**/*.js', ['browserify'])
});
