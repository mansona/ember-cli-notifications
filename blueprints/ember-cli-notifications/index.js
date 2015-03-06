/* jshint node: true */
'use strict';

module.exports = {
    normalizeEntityName: function() {},

    // Use config to determine whether Font Awesome is imported into consuming app
    afterInstall: function(app) {
        var projectConfig = this.project.config(app.env);
        var config = projectConfig['ember-cli-notifications'];

        if (config) {
            var include = config.includeFontAwesome;

            if (include) {
                return this.addBowerPackageToProject('font-awesome');
            }
        }
    }
};
