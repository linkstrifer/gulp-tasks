var browser = require('browser-sync');
var gulp = require('gulp');
var nib = require('nib');
var options = require('../config.js').stylus;
var paths = require('../config.js').paths;
var plugin = require('gulp-load-plugins')();

gulp.task('stylus', function() {
	return gulp.src(paths.stylus + 'base.styl')
		.pipe(plugin.stylus(options))
		.pipe(gulp.dest(paths.styles))
		.pipe(browser.reload({stream: true}));
});