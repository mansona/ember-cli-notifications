import NotificationMessage from 'ember-cli-notifications/components/notification-message';
import ENV from '../config/environment';

var config = ENV['ember-cli-notifications'] ||
             { icons: 'font-awesome' };

export default NotificationMessage.extend({
  icons: config.icons
});
