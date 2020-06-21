var gulp = require("gulp")
stylus = require("gulp-stylus")


gulp.task('stylus', function () {
    gulp.watch('Arcivo a ver', {//Esto se puede poner con stylus/*.styl
        ignoreInitial: false
    }, function (css) {
        gulp.src("Archivo a compilar")
            .pipe(stylus())
            .pipe(gulp.dest("lugar donde se va a compilar"))//Aqui va la carpeta donde se va a poner
        css()
    });
});