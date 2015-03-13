var gulp = require('gulp');
var paths = require('../config.js').paths;

gulp.task('dev', [
		'browser-sync:dev',
		'stylus',
		'unused-css'
	], function() {
		gulp.watch(paths.base + '**/*.scss', ['sass']);
		gulp.watch(paths.stylus + '**/*.styl', ['stylus', 'unused-css']);
		gulp.watch(paths.base + '**/*.html', ['html']);
		gulp.watch(paths.base + '**/*.js', ['js']);
});