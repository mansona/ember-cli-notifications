import Ember from 'ember';

const { Controller, computed, inject: { service } } = Ember;

export default Controller.extend({
  message: 'Notification message',
  htmlMessage: '<b>HTML notification message</b>',
  type: 'success',
  autoClear: true,
  clearDuration: 2400,
  htmlContent: false,
  position: 'top',
  zindex: '9999',
  cssClasses: 'profile-saved-success-notification',

  notifications: service('notification-messages'),

  disableTimeoutInput: computed.not('autoClear'),

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
