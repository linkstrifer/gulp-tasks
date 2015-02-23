var gulp = require('gulp');
var spawn = require('child_process').spawn;
var argv = require('yargs').argv;

gulp.task('autoreload-gulp', function() {
    var process;

    gulp.watch(['gulpfile.js', 'gulp/**/*.js'], restart);
    restart();

    function restart() {
        if(process) {
            process.kill();
        }
        process = spawn('gulp', [argv.t || argv.task], {stdio: 'inherit'});
    }
});
