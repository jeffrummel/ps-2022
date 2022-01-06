var project = require('./_project.js')
var gulp    = require('gulp')
var serve   = require('gulp-serve')

gulp.task('serve', serve({
  root: [project.dest],
  port: 8008
}))