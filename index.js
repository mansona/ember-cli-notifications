'use strict';

const CssImport = require('postcss-import');
const PresetEnv = require('postcss-preset-env');
const styleDir = require('path').join(__dirname, 'addon', 'styles');

module.exports = {
  name: require('./package').name,

  options: {
    postcssOptions: {
      compile: {
        enabled: true,
        includePaths: [styleDir],
        plugins: [
          { module: CssImport },
          {
            module: PresetEnv,
            options: { stage: 3 },
            features: {
              'nesting-rules': true
            }
          }
        ]
      }
    }
  },
};
