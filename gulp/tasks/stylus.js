var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();
var paths = require('../config.js').paths;
var browser = require('browser-sync');
var options = require('../config.js').stylus;
var nib = require('nib');

gulp.task('stylus', function() {
	return gulp.src(paths.stylus + 'base.styl')
		.pipe(plugin.stylus(options))
		.pipe(gulp.dest(paths.css))
		.pipe(browser.reload({stream: true}));
});