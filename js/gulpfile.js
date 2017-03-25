/**
 * Created by Administrator on 2017/3/12.
 */
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('toEs5', () => {
    return gulp.src('index.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('../dist/js'));
});
gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('../css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../dest/css'));
});
gulp.task('prescss', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('../css/*.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../dest/css'));
});