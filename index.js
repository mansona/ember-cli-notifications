'use strict';

const PresetEnv = require('postcss-preset-env');


module.exports = {
  name: require('./package').name,

  options: {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
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
