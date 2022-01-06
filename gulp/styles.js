var project = require('./_project.js')
var gulp    = require('gulp')
var sass    = require('gulp-sass')(require('node-sass'));
var postcss = require('gulp-postcss');

//  Plugins
var precss  = require('precss');
var csso    = require('postcss-csso');
var pixelstorem = require('postcss-pixels-to-rem');

gulp.task('styles', function() {
  return gulp.src(project.src + '/css/*.scss')
    .pipe(sass({
      outputStyle: 'uncompressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(project.dest + '/css/'))
})
gulp.task('styles:production', function() {
  var postProcessor = [
    pixelstorem({
      base: 16
    }),
    precss(),
    csso({forceMediaMerge: true})
  ];
  return gulp.src(project.dest + '/css/*.css')
    .pipe(postcss(postProcessor))
    .pipe(gulp.dest(project.dest + '/css'))
})
