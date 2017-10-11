var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var slim = require("gulp-slim");
var sourcemaps = require("gulp-sourcemaps");

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({style: 'expanded'}).on('error', sass.logError))
    .pipe(plumber())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('slim', function(){
  gulp.src([
    './src/**/*.slim',
    '!./src/include/**.slim'
  ])
    .pipe(plumber())
    .pipe(slim({
      pretty: true,
      require: 'slim/include',
      options: 'include_dirs=["./src/include"]'
    }))
    .pipe(gulp.dest("./assets/"));
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/*.sass', ['sass']);
  gulp.watch('./src/**/*.slim', ['slim']);
});

gulp.task('default', ['watch']);
