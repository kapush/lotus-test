var gulp = require('gulp');

var less = require('gulp-less');

gulp.task('less', function(done){
    gulp.src('pre-less/style.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
    done();
});