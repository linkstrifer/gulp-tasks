var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();
var paths = require('../../../gulp/config.js').paths;
var options = require('../../../gulp/config.js').sass;
var browser = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src(paths.base + paths.sass + '*.scss')
        .pipe(plugin.sass(options))
        .pipe(gulp.dest(paths.styles))
        .pipe(browser.reload({stream: true}));
});