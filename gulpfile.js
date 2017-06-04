const gulp = require('gulp');
const concat = require('gulp-concat');
const template = require('gulp-template');
const rename = require('gulp-rename');

gulp.task('default', ['config', 'concat']);

gulp.task('config', function () {
    const environment = process.env.environment;

    if (!environment) {
        throw new Error('Environment is required.');
    }

    return gulp.src('./frontend/config.template.js')
        .pipe(template({
            environment: environment
        }))
        .pipe(rename('config.js'))
        .pipe(gulp.dest('./frontend/dist'));
});

gulp.task('concat', function() {
    return gulp.src('./frontend/js/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./frontend/dist'));
});