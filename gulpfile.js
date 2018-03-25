var gulp = require('gulp');
var exec = require('child_process').exec;
gulp.task('default', function (cb) {
    var watch = gulp.watch('Sort/*.js');
    watch.on('change', function (event) {
        exec('node '+event.path, function (err, stdout, stderr) {
            console.log('----------------------------------------------------------------------------');
            console.log(stdout);
            console.log('----------------------------------------------------------------------------');
        });
    });
})