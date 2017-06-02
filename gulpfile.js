const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('default', function() {
    return gulp.src('./frontend/js/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./frontend/dist/'));
});