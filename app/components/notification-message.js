import NotificationMessage from 'ember-cli-notifications/components/notification-message';
import ENV from '../config/environment';

const config = ENV['ember-cli-notifications'] || {};

export default NotificationMessage.extend({
  icons: config.icons || 'font-awesome',
  successIcon: config.successIcon || 'fa fa-check',
  infoIcon: config.infoIcon || 'fa fa-info-circle',
  warningIcon: config.warningIcon || 'fa fa-warning',
  errorIcon: config.errorIcon || 'fa fa-exclamation-circle',
  closeIcon: config.closeIcon || 'fa fa-times'
});
