'use strict';

var config = {
    path: './',
    root: './',
    styles: './_src/**.scss',
    appScss: './_src/app.scss',
    scripts: './_src/**.js',
    appJs: './_src/app.js',
    templates: './**.html',
    assets: './_/',
    jshint: {
        "esnext": true,
        "predef": [ "angular", "beforeEach", "it", "expect", "describe", "sessionStorage" ]
    },
};

module.exports = config;
