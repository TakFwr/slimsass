var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var slim = require("gulp-slim");

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.sass')
    .pipe(sass({style: 'expanded'}).on('error', sass.logError))
    .pipe(plumber())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('slim', function(){
  gulp.src("./src/*.slim")
    .pipe(slim({pretty: true}))
    .pipe(plumber())
    .pipe(gulp.dest("./assets/"));
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/*.sass', ['sass']);
  gulp.watch('./src/*.slim', ['slim']);
});

gulp.task('default', ['watch']);
