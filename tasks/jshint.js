var gulp = require('gulp');
var paths = require('../config.js').paths;
var plugin = require('gulp-load-plugins')();

gulp.task('jshint', function() {
    return gulp.src(paths.base)
        .pipe(plugin.jshint())
        .pipe(plugin.jshint.reporter('jshint-stylish'));
});