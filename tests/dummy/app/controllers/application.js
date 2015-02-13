import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        showSuccess: function() {
            this.notifications.addNotification({
                message: "A success notification",
                type: 'success',
                autoClear: true
            });
        },
        showInfo: function() {
            this.notifications.addNotification({
                message: "An info notification",
                type: 'info'
            });
        },
        showError: function() {
            this.notifications.addNotification({
                message: "An error notification",
                type: 'error'
            });
        },
        showWarning: function() {
            this.notifications.addNotification({
                message: "A warning notification",
                type: 'warning'
            });
        }
    }
});
