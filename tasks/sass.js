var browser = require('browser-sync');
var gulp = require('gulp');
var options = require('../config.js').sass;
var paths = require('../config.js').paths;
var plugin = require('gulp-load-plugins')();

gulp.task('sass', function() {
    return gulp.src(paths.base + paths.sass + '*.scss')
        .pipe(plugin.sass(options))
        .pipe(gulp.dest(paths.styles))
        .pipe(browser.reload({stream: true}));
});