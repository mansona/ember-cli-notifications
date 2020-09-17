'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');


module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    minifyCSS: {
      enabled: false
    },
    'ember-prism': {
      'components': ['bash', 'javascript', 'handlebars', 'markup-templating'],
      'plugins': ['line-highlight']
    }
  });

  if ('@embroider/webpack' in app.dependencies()) {
    const { Webpack } = require('@embroider/webpack'); // eslint-disable-line
    return require('@embroider/compat') // eslint-disable-line
      .compatBuild(app, Webpack, {
        staticAddonTestSupportTrees: true,
        staticAddonTrees: true,
        staticHelpers: true,
        staticComponents: true,
      });
  }

  return app.toTree();
};
