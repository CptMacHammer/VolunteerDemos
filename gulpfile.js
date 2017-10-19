/*eslint-env node */

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');


gulp.task('default', 'lint', function() {
  gulp.watch('./*.js',['lint']);

  browserSync.init({
    server: './'
  });
});

gulps.task('lint', function(){
  return gulp.src(['./*.js'])

  .pipe(eslint())

  .pipe(eslint.format())

  .pipe(eslint.failOnError());
});

gulp.task('browser-sync', function() {
    gulp.watch("./scripts/*.js").on('change', browserSync.reload);
});
