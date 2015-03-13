var gulp = require('gulp');
var options = require('../config.js').unusedCss;
var paths = require('../config.js').paths;
var plugins = require('gulp-load-plugins')();

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
