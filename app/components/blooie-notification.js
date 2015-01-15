import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [':notification', 'notification.type', 'notification.dismiss::in', ':pad1', ':center-block'],

    // Set icon depending on notification type
    notificationIcon: function() {
        switch(this.get('notification.type')){
            case "info":
                return 'fa-info-circle';
            case "success":
                return 'fa-check';
            case "warning":
            case "error":
                return 'fa-warning';
        }
    }.property('notification.type'),

    actions: {
        removeNotification: function() {
            this.notifications.removeNotification(this.get('notification'));
        }
    }
});
