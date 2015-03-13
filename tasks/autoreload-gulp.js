var argv = require('yargs').argv;
var gulp = require('gulp');
var spawn = require('child_process').spawn;

gulp.task('autoreload-gulp', function() {
    var process;

    gulp.watch(['gulpfile.js', 'gulp/**/*'], restart);
    restart();

    function restart() {
        if(process) {
            process.kill();
        }
        process = spawn('gulp', [argv.t || argv.task], {stdio: 'inherit'});
    }
});
