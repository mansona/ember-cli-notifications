import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['c-notification'],
  classNameBindings: [
    'processedType',
    'notification.dismiss::c-notification--in',
    'autoClear::c-notification--dismissable'
  ],

  // Set the correct close icon depending on chosen icon font
  closeIcon: Ember.computed('icons', function() {
    if (this.get('icons') === 'bootstrap') return 'glyphicon glyphicon-remove';

    return 'fa fa-times';
  }),

  // Set icon depending on notification type
  notificationIcon: Ember.computed('notification.type', 'icons', function() {
    var icons = this.get('icons');

    if (icons === 'font-awesome') {
      switch(this.get('notification.type')){
        case "info":
          return 'fa fa-info-circle';
        case "success":
          return 'fa fa-check';
        case "warning":
          return 'fa fa-warning';
        case "error":
          return 'fa fa-exclamation-circle';
      }
    }

    if (icons === 'bootstrap') {
      switch(this.get('notification.type')){
        case "info":
          return 'glyphicon glyphicon-info-sign';
        case "success":
          return 'glyphicon glyphicon-ok-sign';
        case "warning":
        case "error":
          return 'glyphicon glyphicon-exclamation-sign';
      }
    }
  }),

  processedType: Ember.computed('notification.type', function() {
    if(this.get('notification.type') && Ember.A(['info', 'success', 'warning', 'error']).contains(this.get('notification.type'))){
      return "c-notification--" + this.get('notification.type');
    }
  }),

  // Apply the clear animation duration rule inline
  notificationClearDuration: Ember.computed('notification.clearDuration', function() {
    var duration = Ember.Handlebars.Utils.escapeExpression(this.get('notification.clearDuration'));
    return Ember.String.htmlSafe(`animation-duration: ${duration}ms; -webkit-animation-duration: ${duration}ms`);
  }),

  actions: {
    removeNotification() {
      this.notifications.removeNotification(this.get('notification'));
    }
  }
});
