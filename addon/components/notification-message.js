import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [':notification', 'notification.type', 'notification.dismiss::in'],

    // Set icon depending on notification type
    notificationIcon: Ember.computed('notification.type', function() {
        switch(this.get('notification.type')){
            case "info":
                return 'fa-info-circle';
            case "success":
                return 'fa-check';
            case "warning":
                return 'fa-warning';
            case "error":
                return 'fa-exclamation-circle';
        }
    }),

    // Apply the clear animation duration rule inline
    notificationClearDuration: Ember.computed('notification.clearDuration', function() {
        return Ember.String.fmt("-webkit-animation-duration: %@ms; animation-duration: %@ms",
          this.get('notification.clearDuration')
        );
    }),

    actions: {
        removeNotification: function() {
            this.notifications.removeNotification(this.get('notification'));
        }
    }
});
