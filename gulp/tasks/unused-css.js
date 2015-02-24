var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var options = require('../config.js').unusedCss;
var paths = require('../config.js').paths;

gulp.task('unused-css', function() {
	return gulp.src(paths.styles + '**/*.css')
		.pipe(plugins.uncss({
			html: [
				paths.base + '**/*.html'
			]
		}))
		.pipe(plugins.cssmin())
        .pipe(gulp.dest(paths.styles));
});
