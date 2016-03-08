var gulp = require('gulp');
var typescript = require('gulp-typescript');
var mocha = require('gulp-mocha');

gulp.task('compile', function () {
  return gulp.src(['typings/*.ts', 'src/**/*.ts', 'test/**/*.ts'])
    .pipe(typescript({
        target: "ES5",
        module: "commonjs",
        moduleResolution: "node",
        noImplicitAny: true,
        outDir: "output",
        declaration: true,
        experimentalDecorators: true
      }
    ))
    .pipe(gulp.dest('output'));
});

gulp.task('test', ['compile'], function () {
  return gulp.src('test/*.js', {cwd: 'output'})
    .pipe(mocha({reporter: 'min'}));
});

gulp.task('default', function () {
  gulp.watch(['src/**/*.ts', 'test/**/*.ts'], ['compile', 'test'])
});
