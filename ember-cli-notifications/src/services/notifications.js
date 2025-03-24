/* eslint-disable ember/no-classic-classes, ember/no-get, ember/no-runloop, prettier/prettier */
import Service from '@ember/service';
import { A } from '@ember/array';
import EmberObject, { set } from '@ember/object';
import { later, cancel } from '@ember/runloop';
import { getOwner } from '@ember/application';

/**
 * Manages notifications stack
 * @class NotificationsService
 * @public
 */
export default class NotificationsService extends Service {
  /**
   * The notifications array
   * @type {array}
   */
  content = A();

  constructor(...args) {
    super(...args);

    const config = getOwner(this).resolveRegistration('config:environment');

    this.globals = config['ember-cli-notifications'] || {}; // Import app config object
  }

  /**
   * Add a notification
   * @param {object} options - The options for the notification
   * @param {string} options.message - The message to display
   * @param {string} [options.type=info] - The type of notification (info, success, warning, error)
   * @param {boolean} [options.autoClear=false] - Whether to automatically clear the notification
   * @param {number} [options.clearDuration=3200] - The duration to wait before clearing the notification
   * @param {callback} options.onClick - A callback function to run when the notification is clicked
   * @param {boolean} [options.htmlContent=false] - Enable basic HTML markup for the notification message
   * @param {string} options.cssClasses - Additional CSS classes to add to the notification
   * @returns {object} - The notification object
   */
  addNotification(options) {
    // If no message is set, throw an error
    if (!options.message) {
      throw new Error('No notification message set');
    }

    const notification = EmberObject.create({
      message: options.message,
      type: options.type || 'info',
      autoClear: options.autoClear ?? this.globals.autoClear ?? false,
      clearDuration:
        options.clearDuration ?? this.globals.clearDuration ?? 3200,
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

  /**
   * Add an error notification
   * @param {string} message - The message to display
   * @param {object} options - The options for the notification
   * @returns {function} - The addNotification method
   */
  error(message, options) {
    return this.addNotification({
      ...options,
      message,
      type: 'error',
    });
  }

  /**
   * Add a success notification
   * @param {string} message - The message to display
   * @param {object} options - The options for the notification
   * @returns {function} - The addNotification method
   */
  success(message, options) {
    return this.addNotification({
      ...options,
      message,
      type: 'success',
    });
  }

  /**
   * Add an info notification
   * @param {string} message - The message to display
   * @param {object} options - The options for the notification
   * @returns {function} - The addNotification method
   */
  info(message, options) {
    return this.addNotification({
      ...options,
      message,
      type: 'info',
    });
  }

  /**
   * Add a warning notification
   * @param {string} message - The message to display
   * @param {object} options - The options for the notification
   * @returns {function} - The addNotification method
   */
  warning(message, options) {
    return this.addNotification({
      ...options,
      message,
      type: 'warning',
    });
  }

  /**
   * Remove single notification
   * @param {object} notification - The notification object to remove
   * @returns {void}
   */
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
      500,
    );
  }

  /**
   * Setup auto clear for a notification
   * @param {object} notification - The notification object to remove
   * @returns {void}
   */
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
      notification.remaining,
    );

    set(notification, 'timer', timer);
  }

  /**
   * Pause auto clear for a notification
   * @param {object} notification - The notification object to pause auto clear for
   * @returns {void}
   */
  pauseAutoClear(notification) {
    cancel(notification.timer);

    const elapsed = Date.now() - notification.startTime;
    const remaining = notification.clearDuration - elapsed;

    set(notification, 'remaining', remaining);
  }

  /**
   * Remove all present notifications
   * @returns {class} - The NotificationsService class
   */
  clearAll() {
    this.content.forEach((notification) => {
      this.removeNotification(notification);
    });

    return this;
  }

  /**
   * Set the default auto clear value
   * @param {boolean} autoClear - The default auto clear value
   * @returns {void}
   */
  setDefaultAutoClear(autoClear) {
    this.globals.autoClear = autoClear;
  }

  /**
   * Set the default clear duration
   * @param {number} clearDuration - The default clear duration
   * @returns {void}
   */
  setDefaultClearDuration(clearDuration) {
    this.globals.clearDuration = clearDuration;
  }
}
