var project = require('./_project.js')
var gulp    = require('gulp')
var uglify  = require('gulp-uglify-es').default
var concat  = require('gulp-concat')
var pump    = require('pump')

gulp.task('scripts', function(done) {
  pump([
      gulp.src(project.src + '/js/main.js'),
      concat('main.js'),
      uglify(),
      gulp.dest(project.dest + '/js')
    ], done()
  )
})