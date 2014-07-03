var gulp = require("gulp");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var connect = require('connect');
var http = require('http');
var config = require('./config');


gulp.task('serve', ['browserify', 'watch'], function(){
  var app = connect()
    .use(connect.logger('dev'))
    .use(connect.static(config.root));

  console.log('Listening on port ' + config.port);
  http.createServer(app).listen(config.port);
});

gulp.task('watch', function() {
  gulp.watch(['./app/**/*.js'], ['browserify']);
});

gulp.task('browserify', function() {
  return browserify('./app/app.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build'));
});