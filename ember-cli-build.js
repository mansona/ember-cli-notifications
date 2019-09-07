'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    'ember-prism': {
      'theme': 'tomorrow',
      'components': ['css', 'bash', 'javascript'], //needs to be an array, or undefined.
      'plugins': [
        'line-numbers',
        // 'line-highlight', 
        'remove-initial-line-feed',
        'normalize-whitespace'
      ]
    },
    cssModules: {
      plugins: [
        require('postcss-import')
      ]
    },
 
  });

  

  return app.toTree();
};
