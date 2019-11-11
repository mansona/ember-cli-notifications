'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

const PresetEnv = require('postcss-preset-env');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          {
            module: PresetEnv,
            options: { stage: 3 },
            features: { 'nesting-rules': true }
          }
        ]
      }
    },
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
