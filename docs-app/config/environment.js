'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'docs-app',
    environment,
    rootURL: '/',
    locationType: 'trailing-history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'field-guide': {
      name: 'ember-cli-notifications',
      copyright: '© Chris Manson 2021',
      tagLine: 'Atom inspired notifications for ember-cli',

      social: [
        {
          name: 'github',
          title: 'ember-cli-notifications Repository',
          link: 'https://github.com/mansona/ember-cli-notifications',
        },
        {
          name: 'npm',
          link: 'https://www.npmjs.com/package/ember-cli-notifications',
        },
      ],
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
