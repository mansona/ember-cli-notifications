'use strict';

const CssImport = require('postcss-import');
const PresetEnv = require('postcss-preset-env');
var broccoliPostCSS = require('broccoli-postcss')
const mergeTrees = require('broccoli-merge-trees');
var get = require('lodash.get');


module.exports = {
  name: require('./package').name,

  treeForAddon() {
    var tree = this._super(...arguments);

    // I don't know exactly why targets is private so I am using `get()` to make
    // sure that it isn't missing
    let overrideBrowserslist = get(this, 'app.project._targets.browsers');

    let newFile = broccoliPostCSS('prebuilt-styles', {
      plugins: [
        CssImport({
          path: 'prebuilt-styles'
        }),
        PresetEnv({
          stage: 3,
          features: { 'nesting-rules': true },
          overrideBrowserslist,
        })
      ]});

    return mergeTrees([tree, newFile]);
  },
};
