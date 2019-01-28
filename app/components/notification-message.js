import NotificationMessage from 'ember-cli-notifications/components/notification-message';

import config from 'ember-get-config';

const globals = config['ember-cli-notifications'] || {}; // Import app config object

export default NotificationMessage.extend({
  init() {
    this._super(...arguments);
    this.icons = globals.icons || 'font-awesome';
    this.successIcon = globals.successIcon || 'fa fa-check',
    this.infoIcon = globals.infoIcon || 'fa fa-info-circle',
    this.warningIcon = globals.warningIcon || 'fa fa-warning',
    this.errorIcon = globals.errorIcon || 'fa fa-exclamation-circle',
    this.closeIcon = globals.closeIcon || 'fa fa-times'
  }
});
