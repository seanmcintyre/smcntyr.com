'use strict';

var config          = require('../config'),
    gulp            = require('gulp'),
    bs              = require('browser-sync').create('bs1');

// Watch files without BrowserSync server
gulp.task('watch', ['templates', 'scripts', 'styles'], function() {
    gulp.watch(config.styles, ['styles']);
    gulp.watch(config.scripts, ['scripts']);
});
