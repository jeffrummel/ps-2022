var project = require('./_project.js')
var gulp    = require('gulp')
var serve   = require('gulp-live-server')

gulp.task('serve', function() {
  var server = serve.static(project.dest, 8008);
  server.start();
})