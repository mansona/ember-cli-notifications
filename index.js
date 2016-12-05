/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-notifications',

  options: {
    cssModules: {
      postcssOptions: {
        map: true
      },
      plugins: [
        require('postcss-cssnext')
      ]
    }
  },

  included(app) {
    const projectConfig = this.project.config(app.env);
    const config = projectConfig['ember-cli-notifications'];

    this.importFontAwesome(config, app);
    this.assignCssVariables(config);

    this._super.included.apply(this, arguments);
  },

  assignCssVariables(config) {
    this.options = Object.assign({}, this.options, {
      cssModules: {
        virtualModules: {
          'ember-cli-notifications-variables': {
            '--error-colour': config.errorColour || '#e74c3c',
            '--info-colour': config.infoColour || '#3ea2ff',
            '--success-colour': config.successColour || '#64ce83',
            '--warn-colour': config.warnColour || '#ff7f48',
          }
        }
      }
    });
  },

  importFontAwesome(configObject, app) {
    const config = configObject || { includeFontAwesome: false };

    if (config.includeFontAwesome) {
      app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.eot', {
        destDir: 'fonts'
      });
      app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.svg', {
        destDir: 'fonts'
      });
      app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.ttf', {
        destDir: 'fonts'
      });
      app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff', {
        destDir: 'fonts'
      });
      app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff2', {
        destDir: 'fonts'
      });
      app.import(app.bowerDirectory + '/font-awesome/css/font-awesome.css');
    }
  }
};
