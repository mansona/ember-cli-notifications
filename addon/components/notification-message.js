import Ember from 'ember';
import layout from '../templates/components/notification-message';
import styles from '../styles/components/notification-message';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  styles,

  classNameBindings: [
    'styles.c-notification',
    'dismissClass',
    'clickableClass',
    'processedType'
  ],

  paused: false,

  dismissClass: computed('notification.dismiss', function() {
    if (!this.get('notification.dismiss')) return this.get('styles.c-notification--in');
  }),

  clickableClass: computed('notification.onClick', function() {
    if (this.get('notification.onClick')) return this.get('styles.c-notification--clickable');
  }),

  // Set icon depending on notification type
  notificationIcon: computed('notification.type', 'icons', function() {
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

  mouseDown() {
    if (this.get('notification.onClick')) {
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

  processedType: computed('notification.type', function() {
    if (this.get('notification.type') && Ember.A(['info', 'success', 'warning', 'error']).contains(this.get('notification.type'))) {
      return this.get(`styles.c-notification--${this.get('notification.type')}`);
    }
  }),

  // Apply the clear animation duration rule inline
  notificationClearDuration: computed('paused', 'notification.clearDuration', function() {
    const duration = Ember.Handlebars.Utils.escapeExpression(this.get('notification.clearDuration'));
    const playState = this.get('paused') ? 'paused' : 'running';
    return Ember.String.htmlSafe(`animation-duration: ${duration}ms; -webkit-animation-duration: ${duration}ms; animation-play-state: ${playState}; -webkit-animation-play-state: ${playState}`);
  }),

  actions: {
    removeNotification() {
      this.notifications.removeNotification(this.get('notification'));
    }
  }
});
