/* eslint-disable n/no-missing-require */
'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    usePnpm: true,
    scenarios: [
      {
        name: 'ember-lts-3.16',
        npm: {
          devDependencies: {
            'ember-source': '~3.16.0',
            'ember-cli': '~4.12.0',
            'ember-qunit': '6.0.0',
            '@ember/test-helpers': '^2.4.0',
            'ember-resolver': '8.1.0',
            '@ember/string': '^3.0.0',
            'ember-cli-app-version': '^6.0.0',
          },
        },
      },
      {
        name: 'ember-lts-3.20',
        npm: {
          devDependencies: {
            'ember-source': '~3.20.5',
            'ember-cli': '~4.12.0',
            'ember-qunit': '6.0.0',
            '@ember/test-helpers': '^2.4.0',
            'ember-resolver': '8.1.0',
            '@ember/string': '^3.0.0',
            'ember-cli-app-version': '^6.0.0',
          },
        },
      },
      {
        name: 'ember-lts-3.24',
        npm: {
          devDependencies: {
            'ember-source': '~3.24.3',
            'ember-cli': '~4.12.0',
            'ember-qunit': '6.0.0',
            '@ember/test-helpers': '^2.4.0',
            'ember-resolver': '8.1.0',
            '@ember/string': '^3.0.0',
            'ember-cli-app-version': '^6.0.0',
          },
        },
      },
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            'ember-source': '~3.28.0',
            'ember-cli': '~4.12.0',
            'ember-resolver': '^11.0.0',
          },
        },
      },
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            'ember-source': '~4.4.0',
            'ember-resolver': '^11.0.0',
          },
        },
      },
      {
        name: 'ember-lts-4.8',
        npm: {
          devDependencies: {
            'ember-source': '~4.8.0',
            'ember-resolver': '^11.0.0',
          },
        },
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.4',
        npm: {
          devDependencies: {
            'ember-source': '~5.4.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
          },
        },
      },
      {
        name: 'ember-classic',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'application-template-wrapper': true,
            'default-async-observers': false,
            'template-only-glimmer-components': false,
          }),
        },
        npm: {
          devDependencies: {
            'ember-source': '~3.28.0',
            'ember-cli': '~4.12.0',
            'ember-resolver': '^11.0.0',
          },
          ember: {
            edition: 'classic',
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
      {
        name: 'no-deprecations',
        npm: {
          devDependencies: {
            'ember-deprecation-error': '*',
          },
        },
      },
      {
        name: 'ember-release-no-deprecations',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
            'ember-deprecation-error': '*',
          },
        },
      },
    ],
  };
};
