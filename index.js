'use strict';

const Funnel = require('broccoli-funnel');
const path = require('path');
const fs = require('fs');

const faPath = path.dirname(require.resolve('font-awesome/package.json'));

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

  treeForVendor() {
    return new Funnel(faPath, {
      destDir: 'font-awesome',
      include: ['css/*', `fonts/*`]
    });
  },

  included(app) {
    const projectConfig = this.project.config(app.env);
    const config = projectConfig['ember-cli-notifications'];

    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    // Don't import Font Awesome assets if specified in consuming app
    if (config && config.includeFontAwesome && config.includeFontAwesome !== false && config.icons !== 'fa-5') {
      this.importFontAwesome(app);
    }
  },

  importFontAwesome(app) {
    const cssPath = 'vendor/font-awesome/css';
    const fontsPath = 'vendor/font-awesome/fonts';
    const absoluteFontsPath = path.join(faPath, 'fonts');
    const fontsToImport = fs.readdirSync(absoluteFontsPath);

    fontsToImport.forEach((fontFilename) => {
      app.import(
        path.join(fontsPath, fontFilename),
        { destDir: '/fonts' }
      );
    });
    app.import({
      development: path.join(cssPath, 'font-awesome.css'),
      production: path.join(cssPath, 'font-awesome.min.css')
    });
  }
};
