import Ember from 'ember';
import config from 'ember-get-config';

const assign = Ember.assign || Ember.merge;
const globals = config['ember-cli-notifications']; // Import app config object

const {
  ArrayProxy,
  A,
  getWithDefault,
  run
} = Ember;

const NotificationMessagesService = ArrayProxy.extend({
  content: A(),

  _setupNotification(options, notification=Ember.Object.create()) {
    if (Object.keys(notification).length === 0) {
      // If no message is set, throw an error
      if (!options.message) {
        throw new Error("No notification message set");
      }

      // set default values for new notification
      notification.setProperties({
        type: 'info',
        autoClear: getWithDefault(globals, 'autoClear', false),
        clearDuration: getWithDefault(globals, 'clearDuration', 5000),
        htmlContent: false,
      });
    }

    Object.keys(options).forEach((key) => {
      if (key in options) {
        notification.set(key, options[key]);
      }
    });

    if (options.autoClear || options.clearDuration) {
      notification.set('remaining', notification.get('clearDuration'));
      this.setupAutoClear(notification);
    }

    return notification;
  },

  addNotification(options) {
    return this.pushObject(this._setupNotification(options));
  },

  changeNotification(notification, options) {
    if (!notification) {
      return;
    }
    return this._setupNotification(options, notification);
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
  isServiceFactory: true
});

export default NotificationMessagesService;
