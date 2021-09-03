const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const htmlclean = require('gulp-htmlclean');
const minifycss = require('gulp-minify-css');
const uglify = require('gulp-uglify');
// const imagemin = require('gulp-imagemin');

// 压缩 html 目录 html
gulp.task('minify-html', function() {
    return gulp.src('./html/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});

// 压缩 css 目录 css
gulp.task('minify-css', function() {
    return gulp.src('./css/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public/css'));
});

// 压缩 js 目录 js
gulp.task('minify-js', function() {
    return gulp.src('./js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});

// 压缩 img 目录 img
gulp.task('minify-img', function() {
    return gulp.src('./img/**/*.*')
        // .pipe(imagemin({
        //     progressive: true
        // }))
        .pipe(gulp.dest('./public/img'))
});

// 执行 gulp 命令时执行的任务
// gulp.task('default', [
//     'minify-html','minify-css','minify-js','minify-img'
// ]);
