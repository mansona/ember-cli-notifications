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

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    // Needed for IE11 https://github.com/embroider-build/embroider/issues/731
    skipBabel: [
      {
        package: 'qunit'
      }
    ]
  });
};
