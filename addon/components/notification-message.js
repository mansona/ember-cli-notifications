import Ember from 'ember';
import layout from '../templates/components/notification-message';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['c-notification'],
  classNameBindings: [
    'processedType',
    'notification.dismiss::c-notification--in',
    'notification.onClick:c-notification--clickable'
  ],

  paused: false,

  // Set the correct close icon depending on chosen icon font
  closeIcon: Ember.computed('icons', function() {
    if (this.get('icons') === 'bootstrap') return 'glyphicon glyphicon-remove';

    return 'fa fa-times';
  }),

  // Set icon depending on notification type
  notificationIcon: Ember.computed('notification.type', 'icons', function() {
    const icons = this.get('icons');

    if (icons === 'bootstrap') {
      switch (this.get('notification.type')){
        case "info":
          return 'glyphicon glyphicon-info-sign';
        case "success":
          return 'glyphicon glyphicon-ok-sign';
        case "warning":
        case "error":
          return 'glyphicon glyphicon-exclamation-sign';
      }
    }

    switch (this.get('notification.type')){
      case "info":
        return 'fa fa-info-circle';
      case "success":
        return 'fa fa-check';
      case "warning":
        return 'fa fa-warning';
      case "error":
        return 'fa fa-exclamation-circle';
    }
  }),

  mouseDown(element) {
    //when close button (or any of its children) is clicked, do not call onClick callback
    let removeNotificationClicked = Ember.$(element.target).closest('.c-notification__close').length !== 0;

    if (this.get('notification.onClick') && !removeNotificationClicked) {
      this.get('notification.onClick')(this.get('notification'));
    }
  },
  mouseEnter() {
    if (this.get('notification.autoClear')) {
      this.set('paused', true);
      this.notifications.pauseAutoClear(this.get('notification'));
    }
  },

  mouseLeave() {
    if (this.get('notification.autoClear')) {
      this.set('paused', false);
      this.notifications.setupAutoClear(this.get('notification'));
    }
  },

  processedType: Ember.computed('notification.type', function() {
    if (this.get('notification.type') && Ember.A(['info', 'success', 'warning', 'error']).contains(this.get('notification.type'))) {
      return `c-notification--${this.get('notification.type')}`;
    }
  }),

  // Apply the clear animation duration rule inline
  notificationClearDuration: Ember.computed('paused', 'notification.clearDuration', function() {
    const duration = Ember.Handlebars.Utils.escapeExpression(this.get('notification.clearDuration'));
    const playState = this.get('paused') ? 'paused' : 'running';
    return Ember.String.htmlSafe(`animation-duration: ${duration}ms; -webkit-animation-duration: ${duration}ms; animation-play-state: ${playState}; -webkit-animation-play-state: ${playState}`);
  }),

  actions: {
    removeNotification() {
      if ( this.get('notification.onClose')){
        this.get('notification.onClose')(this.get('notification'));
      }

      this.notifications.removeNotification(this.get('notification'));
    }
  }
});
