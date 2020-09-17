import Component from '@ember/component';
import Ember from 'ember';

import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

import layout from '../templates/components/notification-message';

export default Component.extend({
  layout,
  tagName: '',
  notifications: service(),

  paused: false,

  dismissClass: computed('notification.dismiss', function() {
    if (!this.notification.dismiss) return 'c-notification--in';

    return false;
  }),

  clickableClass: computed('notification.onClick', function() {
    if (this.notification.onClick) return 'c-notification--clickable';

    return false;
  }),

  notificationSVGPath: computed('notification.type', function() {
    switch(this.notification.type) {
      case "error":
      case "info":
        return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z';
      case "success":
        return 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z';
      case "warning":
        return 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z';
    }

    return '';
  }),


  processedType: computed('notification.type', function() {
    if (this.notification.type && ['info', 'success', 'warning', 'error'].indexOf(this.notification.type) !== -1 ) {
      return `c-notification--${this.notification.type}`;
    }

    return '';
  }),

  // Apply the clear animation duration rule inline
  notificationClearDuration: computed('paused', 'notification.clearDuration', function() {
    const duration = Ember.Handlebars.Utils.escapeExpression(this.notification.clearDuration);
    const playState = this.paused ? 'paused' : 'running';
    return htmlSafe(`animation-duration: ${duration}ms; -webkit-animation-duration: ${duration}ms; animation-play-state: ${playState}; -webkit-animation-play-state: ${playState}`);
  }),

  actions: {
    handleOnClick() {
      if (this.notification.onClick) {
        this.notification.onClick(this.notification);
      }
    },

    removeNotification() {
      this.notifications.removeNotification(this.notification);
    },

    handleMouseEnter() {
      if (this.notification.autoClear) {
        this.set('paused', true);
        this.notifications.pauseAutoClear(this.notification);
      }
    },

    handleMouseLeave() {
      if (this.notification.autoClear) {
        this.set('paused', false);
        this.notifications.setupAutoClear(this.notification);
      }
    },
  }
});
