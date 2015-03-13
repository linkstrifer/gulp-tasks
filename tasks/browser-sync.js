var browser = require('browser-sync');
var gulp = require('gulp');
var options = require('../config.js').server;

gulp.task('browser-sync:dev', function() {
	browser(options.dev);
});