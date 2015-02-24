var gulp = require('gulp');
var paths = require('../config.js').paths;

gulp.task('dev', [
		'browser-sync:dev',
		'stylus',
		'unused-css'
	], function() {
		gulp.watch(paths.base + '**/*.scss', ['sass']);
		gulp.watch(paths.base + '**/*.styl', ['stylus']);
		gulp.watch(paths.base + '**/*.html', ['html']);
		gulp.watch(paths.base + '**/*.js', ['js']);
});