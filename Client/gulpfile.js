const { task } = require('gulp')
const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const sass = gulpSass(require('sass'))


task('sass' , async () => {
    gulp.src('src/Components/*/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
})
task('watch' , async () => {
    gulp.watch('src/Components/*/*.scss' , async () => {
        gulp.src('src/Components/*/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
    })
})