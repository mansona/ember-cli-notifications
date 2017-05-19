import Ember from 'ember';
import config from 'ember-get-config';

const assign = Ember.assign || Ember.merge;
const globals = config['ember-cli-notifications']; // Import app config object

const {
  ArrayProxy,
  A,
  Object,
  getWithDefault,
  run
} = Ember;

const NotificationMessagesService = ArrayProxy.extend({
  content: A(),

  // Method for adding a notification
  addNotification(options) {
    // If no message is set, throw an error
    if (!options.message) {
      throw new Error("No notification message set");
    }

    const notification = Object.create({
      message: options.message,
      type: options.type || 'info',
      autoClear: options.autoClear || getWithDefault(globals, 'autoClear', false),
      clearDuration: options.clearDuration || getWithDefault(globals, 'clearDuration', 5000),
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
    return this.addNotification(assign({
      message: message,
      type: 'error'
    }, options));
  },

  success(message, options) {
    return this.addNotification(assign({
      message: message,
      type: 'success'
    }, options));
  },

  info(message, options) {
    return this.addNotification(assign({
      message: message,
      type: 'info'
    }, options));
  },

  warning(message, options) {
    return this.addNotification(assign({
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
    isServiceFactory: true,
});

export default NotificationMessagesService;
