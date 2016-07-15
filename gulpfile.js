var gulp = require('gulp'),
    fs = require('fs'),
    ts = require('gulp-typescript'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglifyjs'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    rimraf = require('gulp-rimraf'),
    ngAnnotate = require('gulp-ng-annotate'),
    replace = require('gulp-replace'),
    injectString = require('gulp-inject-string'),
    webpack = require('gulp-webpack');
var PROJECT_PATH, AUTOPREFIXER_CONFIG, INJECT_CONFIG, TS_CONFIG, NG_ANNOTATE_CONFIG, UGLIFY_CONFIG, SASS_SETTINGS;
/*************************************************
 * Config
 ************************************************/
PROJECT_PATH = {
    SRC: 'src/',
    DIST: 'dist/'
};
TS_CONFIG = {
    target: 'es5',
    noImplicitAny: false,
    emitDecoratorMetadata: true,
    outDir: 'js'
};
AUTOPREFIXER_CONFIG = {
    browsers: ['last 2 versions'],
    cascade: true
};
SASS_SETTINGS = {outputStyle: 'expanded'};
/*************************************************
 * Utils
 ************************************************/
gulp.task('util:clean:dist', function () {
    return gulp.src(PROJECT_PATH.DIST, {read: false}).pipe(rimraf());
});
gulp.task('util:clean:src', function () {
    var paths = [
        PROJECT_PATH.SRC + 'js',
        PROJECT_PATH.SRC + 'css'
    ];
    gulp.src(paths, {read: false})
        .pipe(rimraf());
});
gulp.task('util:watch', function () {
    gulp.watch('src/ts/*.ts', ['compile:ts']);
});
/*************************************************
 * Compilers
 ************************************************/
gulp.task('compile:ts', function () {
    return gulp.src(PROJECT_PATH.SRC + 'ts/*.ts')
        .pipe(ts(TS_CONFIG))
        .pipe(gulp.dest(PROJECT_PATH.SRC + 'js'));
});
gulp.task('compile:styles', function () {
    return gulp.src(PROJECT_PATH.SRC + 'styles/**/*.scss')
        .pipe(sass(SASS_SETTINGS).on('error', sass.logError))
        .pipe(autoprefixer(AUTOPREFIXER_CONFIG))
        .pipe(gulp.dest(PROJECT_PATH.SRC + 'css'));
});
/*************************************************
 * Builders
 ************************************************/
gulp.task('build:webpack:dev', function () {
    return gulp.src('src/dragster.app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('src/_build'));
});
/*************************************************
 * Misc
 ************************************************/