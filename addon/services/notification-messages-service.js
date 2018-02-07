import { getOwner } from '@ember/application';
import { A } from '@ember/array';
import EmberObject, { computed } from '@ember/object';
import { assign, merge } from '@ember/polyfills';
import ArrayProxy from '@ember/array/proxy';
import { run } from '@ember/runloop';

const notificationAssign = assign || merge;

const NotificationMessagesService = ArrayProxy.extend({
  content: A(),

  _defaultOptions: computed(function() {
    const envOptions = getOwner(this).resolveRegistration('config:environment')['ember-cli-notifications'];
    return notificationAssign({
      autoClear: false,
      clearDuration: 5000
    }, envOptions);
  }),

  // Method for adding a notification
  addNotification(options) {
    // If no message is set, throw an error
    if (!options.message) {
      throw new Error("No notification message set");
    }

    // Override defaults with environment and override that with passed-in values
    const { autoClear, clearDuration } = notificationAssign(this.get('_defaultOptions'), options);

    const notification = EmberObject.create({
      message: options.message,
      type: options.type || 'info',
      autoClear,
      clearDuration,
      onClick: options.onClick,
      htmlContent: options.htmlContent || false,
      cssClasses: options.cssClasses
    });

    this.pushObject(notification);

    if (notification.autoClear) {
      notification.set('remaining', notification.get('clearDuration'));

      this.setupAutoClear(notification);
    }

    return notification;
  },

  // Helper methods for each type of notification
  error(message, options) {
    return this.addNotification(notificationAssign({
      message: message,
      type: 'error'
    }, options));
  },

  success(message, options) {
    return this.addNotification(notificationAssign({
      message: message,
      type: 'success'
    }, options));
  },

  info(message, options) {
    return this.addNotification(notificationAssign({
      message: message,
      type: 'info'
    }, options));
  },

  warning(message, options) {
    return this.addNotification(notificationAssign({
      message: message,
      type: 'warning'
    }, options));
  },

  removeNotification(notification) {
    if (!notification) {
      return;
    }

    notification.set('dismiss', true);

    // Delay removal from DOM for dismissal animation
    run.later(this, () => {
      this.removeObject(notification);
    }, 500);
  },

  setupAutoClear(notification) {
    notification.set('startTime', Date.now());

    const timer = run.later(this, () => {
      // Hasn't been closed manually
      if (this.indexOf(notification) >= 0) {
          this.removeNotification(notification);
      }
    }, notification.get('remaining'));

    notification.set('timer', timer);
  },

  pauseAutoClear(notification) {
    run.cancel(notification.get('timer'));

    const elapsed = Date.now() - notification.get('startTime');
    const remaining = notification.get('clearDuration') - elapsed;

    notification.set('remaining', remaining);
  },

  clearAll() {
    this.get('content').forEach(notification => {
      this.removeNotification(notification);
    });

    return this;
  }
});

NotificationMessagesService.reopenClass({
  isServiceFactory: true
});

export default NotificationMessagesService;
