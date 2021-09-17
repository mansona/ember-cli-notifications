/* eslint-disable ember/no-classic-classes, ember/no-get */
import Service from '@ember/service';
import { A } from '@ember/array';
import EmberObject, { set } from '@ember/object';
import { later, cancel } from '@ember/runloop';
import config from 'ember-get-config';

const globals = config['ember-cli-notifications'] || {}; // Import app config object

export default class NotificationsService extends Service {
  content = A();

  // Method for adding a notification
  addNotification(options) {
    // If no message is set, throw an error
    if (!options.message) {
      throw new Error('No notification message set');
    }

    const notification = EmberObject.create({
      message: options.message,
      type: options.type || 'info',
      autoClear: options.autoClear ?? globals.autoClear ?? false,
      clearDuration: options.clearDuration ?? globals.clearDuration ?? 3200,
      onClick: options.onClick,
      htmlContent: options.htmlContent || false,
      cssClasses: options.cssClasses,
    });

    this.content.pushObject(notification);

    if (notification.autoClear) {
      set(notification, 'remaining', notification.clearDuration);

      this.setupAutoClear(notification);
    }

    return notification;
  }

  // Helper methods for each type of notification
  error(message, options) {
    return this.addNotification({
      ...options,
      message,
      type: 'error',
    });
  }

  success(message, options) {
    return this.addNotification({
      ...options,
      message,
      type: 'success',
    });
  }

  info(message, options) {
    return this.addNotification({
      ...options,
      message,
      type: 'info',
    });
  }

  warning(message, options) {
    return this.addNotification({
      ...options,
      message,
      type: 'warning',
    });
  }

  removeNotification(notification) {
    if (!notification) {
      return;
    }

    notification.set('dismiss', true);

    // Delay removal from DOM for dismissal animation
    later(
      this,
      () => {
        this.content.removeObject(notification);
      },
      500
    );
  }

  setupAutoClear(notification) {
    notification.set('startTime', Date.now());

    const timer = later(
      this,
      () => {
        // Hasn't been closed manually
        if (this.content.indexOf(notification) >= 0) {
          this.removeNotification(notification);
        }
      },
      notification.remaining
    );

    set(notification, 'timer', timer);
  }

  pauseAutoClear(notification) {
    cancel(notification.timer);

    const elapsed = Date.now() - notification.startTime;
    const remaining = notification.clearDuration - elapsed;

    set(notification, 'remaining', remaining);
  }

  clearAll() {
    this.content.forEach((notification) => {
      this.removeNotification(notification);
    });

    return this;
  }

  setDefaultAutoClear(autoClear) {
    set(globals, 'autoClear', autoClear);
  }

  setDefaultClearDuration(clearDuration) {
    set(globals, 'clearDuration', clearDuration);
  }
}
