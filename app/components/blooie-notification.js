import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        removeNotification: function() {
            this.notifications.removeNotification(this.get('notification'));
        }
    }
});
