'use strict';

module.exports = {
  singleQuote: true,
  overrides: [
    {
      files: '**/*.{hbs,yml,yaml}',
      options: {
        singleQuote: false,
      },
    },
  ],
};
