var gulp = require('gulp');
var stylus = require('gulp-stylus'); 
var jade = require('gulp-jade');
 
// Get one .styl file and render 
gulp.task('stylus2css', function () {
  return gulp.src('./lib/app.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/css'));
});


gulp.task('watch', function() {
   // Vigila los cambios en los archivos css
  gulp.watch('./public/app.styl', ['stylus2css']);
   // Vigila el html
  gulp.watch('./public/index.jade', ['jade']);
 });


//gulp con jade
// run this task by typing in gulp jade in CLI
gulp.task('jade', function() {
    return gulp.src('./lib/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('./public')); // tell gulp our output folder
});

// Tareas por defecto
gulp.task('default', ['stylus2css','jade','watch']);