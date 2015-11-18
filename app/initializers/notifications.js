import NotificationMessagesService from 'ember-cli-notifications/services/notification-messages-service';

export default {
    name: 'notification-messages-service',

    initialize: function() {
        let application = arguments[1] || arguments[0];
        application.register('notification-messages:service', NotificationMessagesService);

        ['controller', 'component', 'route', 'router', 'service'].forEach(function(injectionTarget) {
            application.inject(injectionTarget, 'notifications', 'notification-messages:service');
        });
    }
};
