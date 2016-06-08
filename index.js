/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-notifications',

  options: {
    cssModules: {
      plugins: [
        require('postcss-import'),
        require('postcss-color-function'),
        require('postcss-custom-media'),
        require('postcss-custom-properties'),
        require('postcss-nested'),
        require('autoprefixer')
      ]
    }
  },

  included: function(app) {
    this._super.included(app);

    this.importFontAwesome(app);
  },

  importFontAwesome: function(app) {
    var projectConfig = this.project.config(app.env);
    var config = projectConfig['ember-cli-notifications'] || { includeFontAwesome: false };

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
