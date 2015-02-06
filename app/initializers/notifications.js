import NotificationMessagesService from 'ember-cli-notifications/services/notification-messages-service';

export default {
    name: 'notification-messages-service',

    initialize: function(container, application) {
        application.register('notification-messages:service', NotificationMessagesService);

        ['controller', 'component', 'route', 'router'].forEach(function(injectionTarget) {
            application.inject(injectionTarget, 'notifications', 'notification-messages:service');
        });
    }
};
