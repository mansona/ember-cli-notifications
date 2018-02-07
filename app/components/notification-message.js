import NotificationMessage from 'ember-cli-notifications/components/notification-message';
import { getOwner } from '@ember/application';
import { computed } from '@ember/object';

export default NotificationMessage.extend({
  icons: computed(function() {
    const config = getOwner(this).resolveRegistration('config:environment')['ember-cli-notifications'] || {};
    return config.icons || 'font-awesome';
  })
});
