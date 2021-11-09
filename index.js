'use strict';

const CssImport = require('postcss-import');
const PresetEnv = require('postcss-preset-env');
const BroccoliPostCSS = require('broccoli-postcss');
const mergeTrees = require('broccoli-merge-trees');
const funnel = require('broccoli-funnel');
const get = require('lodash.get');
const { join } = require('path');
const pkg = require('./package.json');

module.exports = {
  name: require('./package').name,

  treeForAddon() {
    let tree = this._super(...arguments);
    let app = this._findHost();
    let options = typeof app.options === 'object' ? app.options : {};
    let addonConfig = options[pkg.name] || {};

    const addonWithoutStyles = funnel(tree, {
      exclude: ['**/*.css'],
    });

    if (addonConfig.excludeCSS === true) {
      return addonWithoutStyles;
    }

    const addonStyles = funnel(tree, {
      include: ['**/*.css'],
    });

    // I don't know exactly why targets is private so I am using `get()` to make
    // sure that it isn't missing
    let overrideBrowserslist = get(this, 'app.project._targets.browsers');

    let processedStyles = new BroccoliPostCSS(addonStyles, {
      plugins: [
        CssImport({
          path: join(__dirname, 'addon', 'styles'),
        }),
        PresetEnv({
          stage: 3,
          features: { 'nesting-rules': true },
          overrideBrowserslist,
        }),
      ],
    });

    return mergeTrees([addonWithoutStyles, processedStyles]);
  },
};
