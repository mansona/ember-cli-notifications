import NotificationMessage from 'ember-cli-notifications/components/notification-message';

import config from 'ember-get-config';

const globals = config['ember-cli-notifications'] || {}; // Import app config object

export default NotificationMessage.extend({
  init() {
    this._super(...arguments);
    this.icons = globals.icons || 'svg';
    this.svgs = {
        'success': 'success',
        'warning': 'warning',
        'info': 'info',
        'error': 'error',
    };
  }
});
