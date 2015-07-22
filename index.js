/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-notifications',
  included: function(app) {
    this._super.included(app);

    // Use config to determine whether Font Awesome is imported into consuming app
    this.importFontAwesome(app);
  },

  importFontAwesome(app) {
    var projectConfig = this.project.config(app.env);
    var config = projectConfig['ember-cli-notifications'];

    if (config) {
      if (config.importFontAwesome) {
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
  }
};
