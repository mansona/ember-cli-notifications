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

  computedMessage: computed('htmlContent', 'htmlMessage', 'message', function() {
    if (this.htmlContent) return this.htmlMessage;

    return this.message;
  }),

  actions: {
    showNotifcation() {
      if (this.clearAll) {
        this.notifications.clearAll();
      }
      this.notifications.addNotification({
        cssClasses: this.cssClasses,
        message: this.computedMessage,
        type: this.type,
        autoClear: this.autoClear,
        clearDuration: this.clearDuration,
        htmlContent: this.htmlContent
      });
    }
  }
});
