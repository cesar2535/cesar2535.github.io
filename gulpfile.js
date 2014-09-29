var gulp = require('gulp');

var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;