// 嚴格模式
'use strict';

// 引入 Gulp 與 Gulp 差件。
var gulp = require('gulp');

var gulpLess = require('gulp-less');
var gulpCssmin = require('gulp-cssmin');
var gulpAutoprefixer = require('gulp-autoprefixer');

var gulpImagemin = require('gulp-imagemin');

var gulpUseref = require('gulp-useref');
var gulpIf = require('gulp-if');

var gulpUglify = require('gulp-uglify');

gulp.task('css', function() {
	return gulp.src('./public/less/main.less')
	.pipe(gulpLess())
	.pipe(gulpCssmin())
	.pipe(gulpAutoprefixer())
	.pipe(gulp.dest('./release/public/css'))
});

gulp.task('image', function() {
	return gulp.src(['./public/images/**/*', './uploads/*'], {base: './'})
	.pipe(gulpImagemin())
	.pipe(gulp.dest('./release'))
});

gulp.task('useref', function() {
	return gulp.src('./index.html')
	.pipe(gulpUseref())
	.pipe(gulpIf('*.js', gulpUglify()))
	.pipe(gulp.dest('./release'))
});

gulp.task('other', function() {
	return gulp.src(['./api/**/*', './public/fonts/**/*', './views/**/*.html'], {base: './'})
	.pipe(gulp.dest('./release'))
});

// 整合步驟
gulp.task('default', ['css', 'image', 'useref', 'other'], function() {
	
});