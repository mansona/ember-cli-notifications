/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    cssModules: {
      plugins: [
        require('postcss-import'),
        require('postcss-cssnext'),
        require('postcss-nested')
      ]
    }
  });

  return app.toTree();
};
