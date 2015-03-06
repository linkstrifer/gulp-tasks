var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var options = require('../../../gulp/config.js').unusedCss;
var paths = require('../../../gulp/config.js').paths;

gulp.task('unused-css', function() {
	return gulp.src(paths.css + '**/*.css')
		.pipe(plugins.uncss({
			html: [
				paths.base + '**/*.html'
			]
		}))
		.pipe(plugins.cssmin())
        .pipe(gulp.dest(paths.css));
});
