/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-cli-notifications',
    included: function(app) {
        this._super.included(app);

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
};
