import { htmlSafe } from '@ember/string';
import { A } from '@ember/array';
import Component from '@ember/component';
import { computed, getWithDefault } from '@ember/object';
import Ember from 'ember';
import config from 'ember-get-config';
import layout from '../templates/components/notification-message';
import styles from '../styles/components/notification-message';

const iconGlobals = (config['ember-cli-notifications'] || {}).iconClasses || {});

const iconDefaults = {
  close:   'fa fa-times',
  info:    'fa fa-info-circle',
  success: 'fa fa-check',
  warning: 'fa fa-warning',
  error:   'fa fa-exclamation-triangle'
};

export default Component.extend({
  layout,
  styles,

  classNameBindings: [
    'dismissClass',
    'clickableClass',
    'processedType',
    'notification.cssClasses'
  ],

  attributeBindings: ['notification.type:data-test-notification-message'],

  paused: false,

  dismissClass: computed('notification.dismiss', function() {
    if (!this.get('notification.dismiss')) return this.get('styles.c-notification--in');

    return false;
  }),

  clickableClass: computed('notification.onClick', function() {
    if (this.get('notification.onClick')) return this.get('styles.c-notification--clickable');

    return false;
  }),

  closeIcon: computed(() => {
    return getWithDefault(iconGlobals, 'close', iconDefaults.close);
  }),

  // Set icon depending on notification type
  notificationIcon: computed('notification.type', function() {
    let type = this.get('notification.type');
    return getWithDefault(iconGlobals, type, iconDefaults[type]);
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
    if (this.get('notification.type') && A(['info', 'success', 'warning', 'error']).includes(this.get('notification.type'))) {
      return this.get(`styles.c-notification--${this.get('notification.type')}`);
    }
  }),

  // Apply the clear animation duration rule inline
  notificationClearDuration: computed('paused', 'notification.clearDuration', function() {
    const duration = Ember.Handlebars.Utils.escapeExpression(this.get('notification.clearDuration'));
    const playState = this.get('paused') ? 'paused' : 'running';
    return htmlSafe(`animation-duration: ${duration}ms; -webkit-animation-duration: ${duration}ms; animation-play-state: ${playState}; -webkit-animation-play-state: ${playState}`);
  }),

  actions: {
    removeNotification() {
      this.notifications.removeNotification(this.get('notification'));
    }
  }
});
