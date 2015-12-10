import Ember from 'ember';

export default Ember.ArrayProxy.extend({
    content: Ember.A(),

    defaultClearDuration: 3200,

    addNotification(options) {

        // If no message is set, throw an error
        if (!options.message) {
            throw new Error("No notification message set");
        }

        const notification = Ember.Object.create({
            message: options.message,
            type: options.type || 'info', // info, success, warning, error
            autoClear: options.autoClear || false,
            clearDuration: options.clearDuration || this.get('defaultClearDuration')
        });

        this.pushObject(notification);

        if (notification.autoClear) {
            notification.set('remaining', notification.get('clearDuration'));
            this.setupAutoClear(notification);
        }

        return notification;
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
    },

    setDefaultClearNotification(clearDuration) {
      if (Ember.typeOf(clearDuration) !== 'number') {
        throw new Error('Clear duration must be a number');
      }

      this.set('defaultClearDuration', clearDuration);
    }
});
