import NotificationMessage from 'ember-cli-notifications/components/notification-message';
import ENV from '../config/environment';

const config = ENV['ember-cli-notifications'] || {};

export default NotificationMessage.extend({
  icons: config.icons || 'font-awesome'
});
