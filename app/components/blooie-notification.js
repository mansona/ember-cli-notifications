import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: ['notification.type'],

    actions: {
        removeNotification: function() {
            this.notifications.removeNotification(this.get('notification'));
        }
    }
});
