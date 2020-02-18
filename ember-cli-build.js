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

  return app.toTree();
};
