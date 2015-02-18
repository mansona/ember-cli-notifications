'use strict';

module.exports = function(environment) {
    var ENV = {
        // Allow inline styling for animation duration
        contentSecurityPolicy: {
            'style-src': "'self' 'unsafe-inline'",
        }
    };

    return ENV;
};
