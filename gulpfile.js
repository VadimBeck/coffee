const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require("gulp-pug");
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

gulp.task('pug', function() {
  return gulp.src('./src/templates/pages/*.pug')
  .pipe(pug({
    pretty: "\t"
  }))
  .pipe(gulp.dest('./dist'))
});

gulp.task('styles', function() {
	return gulp.src('./src/scss/**/*.scss')	
	.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))		
		.pipe(autoprefixer(['last 2 versions']))
		//.pipe(cleanCSS({
        // level: 2
      //}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./dist/css'))
	.pipe(browserSync.reload( {stream: true} ))
});

gulp.task('scripts', function() {   
   return gulp.src('./src/js/modules/*.js')
   .pipe(sourcemaps.init())
     .pipe(concat('script.min.js'))
     //.pipe(uglify())
     .pipe(sourcemaps.write())
   .pipe(gulp.dest('./dist/scripts'))
   .pipe(browserSync.stream());
});

function watch() {
    browserSync.init({
       server: {
           baseDir: "./dist"
       }
   });
   
   gulp.watch('./src/scss/**/*.scss', gulp.series('styles'))
   gulp.watch('./src/scripts/modules/*.js', gulp.series('scripts'))
   gulp.watch('./src/templates/pages/*.pug', gulp.series('pug'))
   gulp.watch("./dist/*.html").on('change', browserSync.reload);
 }
 gulp.task('default', watch);