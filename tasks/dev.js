var gulp = require('gulp');
var paths = require('../config.js').paths;
var watch = require('gulp-watch');

gulp.task('dev', [
		'browser-sync:dev'
	], function() {
		watch(paths.base + '**/*.html', function() {
			gulp.start('html');
		});
		watch(paths.scripts + '**/*.js', function() {
			gulp.start('js');
		});
		watch(paths.sass + '**/*.scss', function() {
			gulp.start('sass');
		});
		watch(paths.stylus + '**/*.styl', function() {
			gulp.start('stylus');
		});
});