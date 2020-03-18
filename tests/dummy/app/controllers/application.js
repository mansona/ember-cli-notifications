import { not } from '@ember/object/computed';
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  message: 'Notification message',
  htmlMessage: '<b>HTML notification message</b>',
  type: 'success',
  autoClear: false,
  clearDuration: 2800,
  htmlContent: false,
  position: 'top',
  zindex: '9999',
  clearAll: true,
  cssClasses: 'profile-saved-success-notification',

  notifications: service(),

  disableTimeoutInput: not('autoClear'),

  computedMessage: computed('htmlContent', function() {
    if (this.get('htmlContent')) return this.get('htmlMessage');

    return this.get('message');
  }),

  actions: {
    showNotifcation() {
      if (this.get('clearAll')) {
        this.get('notifications').clearAll();
      }
      this.get('notifications').addNotification({
        cssClasses: this.get('cssClasses'),
        message: this.get('computedMessage'),
        type: this.get('type'),
        autoClear: this.get('autoClear'),
        clearDuration: this.get('clearDuration'),
        htmlContent: this.get('htmlContent')
      });
    }
  }
});
