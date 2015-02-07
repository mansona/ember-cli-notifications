/* jshint node: true */
/* global require, module */

var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon({
    minifyCSS: {
        enabled: true
    }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

var fontAwesome = pickFiles(app.bowerDirectory + '/font-awesome/fonts', {
    srcDir: '/',
    files: ['*'],
    destDir: '/fonts'
});

app.import(app.bowerDirectory + '/font-awesome/css/font-awesome.css');

module.exports = mergeTrees([app.toTree(), fontAwesome]);
