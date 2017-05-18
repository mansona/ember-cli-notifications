import Ember from 'ember';

const assign = Ember.assign || Ember.merge;

const NotificationMessagesService = Ember.ArrayProxy.extend({
    content: Ember.A(),

    defaultClearDuration: 3200,
    defaultAutoClear: false,

    addNotification(options) {
        // If no message is set, throw an error
        if (!options.message) {
            throw new Error("No notification message set");
        }

        const notification = Ember.Object.create({
            message: options.message,
            type: options.type || 'info', // info, success, warning, error
            component: options.component,
            autoClear: (Ember.isEmpty(options.autoClear) ? this.get('defaultAutoClear') : options.autoClear),
            clearDuration: options.clearDuration || this.get('defaultClearDuration'),
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
      this.get('content').forEach(notification => {
          this.removeNotification(notification);
      });

      return this;
    },

    setDefaultAutoClear(autoClear) {
      if (Ember.typeOf(autoClear) !== 'boolean') {
        throw new Error('Default auto clear preference must be a boolean');
      }

      this.set('defaultAutoClear', autoClear);

      return this;
    },

    setDefaultClearDuration(clearDuration) {
      if (Ember.typeOf(clearDuration) !== 'number') {
        throw new Error('Clear duration must be a number');
      }

      this.set('defaultClearDuration', clearDuration);

      return this;
    }
});

NotificationMessagesService.reopenClass({
    isServiceFactory: true,
});

export default NotificationMessagesService;
