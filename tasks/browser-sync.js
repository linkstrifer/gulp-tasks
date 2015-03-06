var gulp = require('gulp');
var browser = require('browser-sync');
var options = require('../../../gulp/config.js').server;

gulp.task('browser-sync:dev', function() {
	browser(options.dev);
});