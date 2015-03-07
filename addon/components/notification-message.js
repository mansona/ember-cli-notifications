import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [':notification', 'notification.type', 'notification.dismiss::in'],

    // Set icon depending on notification type
    notificationIcon: function() {
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
    }.property('notification.type'),

    // Apply the clear animation duration rule inline
    notificationClearDuration: function() {
        return "-webkit-animation-duration: %@ms".fmt(this.get('notification.clearDuration'))+"; animation-duration: %@ms".fmt(this.get('notification.clearDuration'));
    }.property('notification.clearDuration'),

    actions: {
        removeNotification: function() {
            this.notifications.removeNotification(this.get('notification'));
        }
    }
});
