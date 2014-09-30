var gulp = require('gulp');

var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var compass = require('gulp-compass');
var gutil = require('gulp-util');
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var srcFiles = {
  index: './src/index.jade',
  views: './src/views/**/*.jade',
  js: './src/js/**/*.js',
  style: './src/sass/**/*.sass',
  assets: {
    files: './src/assets/**',
    base: './src/assets'
  }
};

var buildDir = {
  html: './build',
  js: './build/js',
  style: './build/stylesheets'
};

var publicDir = './_public';

// Clear the build directory
gulp.task('clear', function() {
  del.sync('./build');
});

// Copy assets' files to build directroy
gulp.task('lib', function() {
  return gulp.src(srcFiles.assets.files, {base: srcFiles.assets.base})
    .pipe(gulp.dest(buildDir.html));
});

// Views files
gulp.task('jade-views', function() {
  return gulp.src(srcFiles.views)
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest(buildDir.html));
});

// Index file
gulp.task('jade-index',['jade-views'], function() {
  return gulp.src(srcFiles.index)
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest(buildDir.html));
});