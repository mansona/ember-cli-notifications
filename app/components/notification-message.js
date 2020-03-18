import NotificationMessage from 'ember-cli-notifications/components/notification-message';

import config from 'ember-get-config';

const globals = config['ember-cli-notifications'] || {}; // Import app config object

export default NotificationMessage.extend({
  init() {
    this._super(...arguments);
    this.icons = globals.icons || 'svg';
    if (this.icons === 'custom') {
      this.successIcon = globals.successIcon;
      this.infoIcon = globals.infoIcon;
      this.warningIcon = globals.warningIcon;
      this.errorIcon = globals.errorIcon;
      this.closeIcon = globals.closeIcon;
    }
    this.svgs = {
      'success': 'success',
      'warning': 'warning',
      'info': 'info',
      'error': 'error',
    };
  }
});
