/* jshint node: true */
'use strict';

module.exports = {
  normalizeEntityName: function() {},

  // Use config to determine whether Font Awesome is imported into consuming app
  afterInstall: function(app) {
    var projectConfig = this.project.config(app.env);
    var config = projectConfig['ember-cli-notifications'] ||
                 { includeFontAwesome: false };

    if (config.includeFontAwesome) {
      return this.addBowerPackageToProject('font-awesome');
    }
  }
};
