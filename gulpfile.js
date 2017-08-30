var gulp         = require('gulp'),             // 載入 gulp
    gulpSass     = require('gulp-sass'),    // 載入 gulp-sass
    gulpImagemin = require('gulp-imagemin'),
    gulpUglify   = require('gulp-uglify');

    gulp.task('watch', function () {
        gulp.watch('asset/scss/**/*.scss', ['styles']);
        gulp.watch('asset/js/*.js', ['script']);
    });

gulp.task('styles', function () {
    gulp.src('asset/scss/**/*.scss')    // 指定要處理的 Scss 檔案目錄
        .pipe(gulpSass())         // 編譯 Scss
        .pipe(gulp.dest('css'));  // 指定編譯後的 css 檔案目錄
});

gulp.task('image', function () {
    gulp.src('asset/image/**')
        .pipe(gulpImagemin())
        .pipe(gulp.dest('image'));
});

gulp.task('script', function () {
    gulp.src('asset/js/*.js')        // 指定要處理的原始 JavaScript 檔案目錄
        .pipe(gulpUglify())                     // 將 JavaScript 做最小化
        .pipe(gulp.dest('js'));  // 指定最小化後的 JavaScript 檔案目錄
});
