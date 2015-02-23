var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('default', function() {
	plugins.util.log(
		plugins.util.colors.inverse('Hi!'),
		plugins.util.colors.inverse('\nThere is no default task'),
		plugins.util.colors.inverse('\nCheck the tasks list in the documentation. '),
		plugins.util.colors.green('https://github.com/linkstrifer/gulp-tasks')
	);
});
