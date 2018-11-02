var gulp = require('gulp');
var server = require('gulp-webserver');
var path = require('path');
var fs = require('fs');

gulp.task('default', function() {
    gulp.src('./src/')
        .pipe(server({
            port: 8888,
            host: "localhost",
            livereload: true,
            open: true
        }))
})