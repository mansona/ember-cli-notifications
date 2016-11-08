import Ember from 'ember';
import config from 'ember-get-config';

const assign = Ember.assign || Ember.merge;
const globals = config['ember-cli-notifications']; // Import app config object

// Set global values for user configurable options
function setGlobal(property, value) {
  // If the value exists in app config object, set that as global
  if (property) return property;

  // Otherwise return the default value
  return value;
}

export default Ember.ArrayProxy.extend({
    content: Ember.A(),

    globalAutoClear: setGlobal(globals.autoClear, false),
    globalClearDuration: setGlobal(globals.clearDuration, 3200),

    addNotification(options) {
        // If no message is set, throw an error
        if (!options.message) {
            throw new Error("No notification message set");
        }

        const notification = Ember.Object.create({
            message: options.message,
            type: options.type || 'info', // info, success, warning, error
            autoClear: (Ember.isEmpty(options.autoClear) ? this.get('globalAutoClear') : options.autoClear),
            clearDuration: options.clearDuration || this.get('globalClearDuration'),
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
      this.addNotification(assign({
        message: message,
        type: 'error'
      }, options));
      return this;
    },

    success(message, options) {
      this.addNotification(assign({
        message: message,
        type: 'success'
      }, options));
      return this;
    },

    info(message, options) {
      this.addNotification(assign({
        message: message,
        type: 'info'
      }, options));
      return this;
    },

    warning(message, options) {
      this.addNotification(assign({
        message: message,
        type: 'warning'
      }, options));
      return this;
    },

    removeNotification(notification) {
        if (!notification) {
            return;
        }
        notification.set('dismiss', true);
        // Delay removal from DOM for dismissal animation
        Ember.run.later(this, () => {
            this.removeObject(notification);
        }, 500);
    },

    setupAutoClear(notification) {
        notification.set('startTime', Date.now());

        const timer = Ember.run.later(this, () => {
            // Hasn't been closed manually
            if (this.indexOf(notification) >= 0) {
                this.removeNotification(notification);
            }
        }, notification.get('remaining'));

        notification.set('timer', timer);
    },

    pauseAutoClear(notification) {
        Ember.run.cancel(notification.get('timer'));

        const elapsed = Date.now() - notification.get('startTime');
        const remaining = notification.get('clearDuration') - elapsed;
        notification.set('remaining', remaining);
    },

    clearAll() {
        this.set('content', Ember.A());
        return this;
    }
});
