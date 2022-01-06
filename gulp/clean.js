var project = require('./_project.js')
var gulp    = require('gulp')
var clean   = require('gulp-clean')

gulp.task('clean', function () {
  return gulp.src(project.dest, {read: false})
  .pipe(clean())
})
