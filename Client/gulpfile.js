const { task } = require('gulp')
const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const sass = gulpSass(require('sass'))


task('sass' , async () => {
    gulp.src('index.scss').pipe(sass()).pipe(gulp.dest('src/css'))
})