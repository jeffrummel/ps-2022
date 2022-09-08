var project = require('./_project.js')
var gulp    = require('gulp')


gulp.task('watch', function () {
  gulp.watch(project.src + '/site/**/*', gulp.parallel('generate')),
  gulp.watch(project.src + '/js/**/*', gulp.parallel('scripts')),
  gulp.watch(project.src + '/css/**/*', gulp.parallel('styles'))
})