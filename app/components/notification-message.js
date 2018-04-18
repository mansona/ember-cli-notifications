import NotificationMessage from 'ember-cli-notifications/components/notification-message';

import config from 'ember-get-config';

export default NotificationMessage.extend({
  init() {
    this._super(...arguments);
    this.icons = config['ember-cli-notifications'].icons || 'font-awesome'
  }
});
