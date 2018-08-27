import { assign, merge } from '@ember/polyfills';
import ArrayProxy from '@ember/array/proxy';
import { A } from '@ember/array';
import { isEmpty } from '@ember/utils';
import EmberObject, { getWithDefault, set } from '@ember/object';
import { run } from '@ember/runloop';
import config from 'ember-get-config';

const notificationAssign = assign || merge;
const globals = config['ember-cli-notifications'] || {}; // Import app config object

const NotificationMessagesService = ArrayProxy.extend({
  content: A(),

  // Method for adding a notification
  addNotification(options) {
    // If no message is set, throw an error
    if (!options.message) {
      throw new Error("No notification message set");
    }

    const notification = EmberObject.create({
      message: options.message,
      type: options.type || 'info',
      autoClear: (isEmpty(options.autoClear) ? getWithDefault(globals, 'autoClear', false) : options.autoClear),
      clearDuration: options.clearDuration || getWithDefault(globals, 'clearDuration', 5000),
      onClick: options.onClick,
      htmlContent: options.htmlContent || false,
      cssClasses: options.cssClasses
    });

    const insertAtTop = options.stackNotifications || getWithDefault(globals, 'stackNotifications', false);
    const arrayOperation = (insertAtTop ? this.unshiftObject : this.pushObject).bind(this);
    arrayOperation(notification);

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
  },

  setDefaultAutoClear(autoClear) {
    set(globals, 'autoClear', autoClear);
  },

  setDefaultClearDuration(clearDuration) {
    set(globals, 'clearDuration', clearDuration);
  }
});

NotificationMessagesService.reopenClass({
  isServiceFactory: true
});

export default NotificationMessagesService;
