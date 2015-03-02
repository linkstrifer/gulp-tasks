var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();
var paths = require('../config.js').paths;

gulp.task('jshint', function() {
    return gulp.src(paths.base)
        .pipe(plugin.jshint())
        .pipe(plugin.jshint.reporter('jshint-stylish'));
});