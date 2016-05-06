import Ember from 'ember';
import NotificationMessagesService from 'ember-cli-notifications/services/notification-messages-service';

export default {
    name: 'notification-messages-service',

    initialize() {
        let application = arguments[1] || arguments[0];
        if (Ember.Service) {
          application.register('service:notification-messages', NotificationMessagesService);
          application.inject('component:notification-message', 'notifications', 'service:notification-messages');
          return;
        }
        application.register('notification-messages:service', NotificationMessagesService);

        ['controller', 'component', 'route', 'router', 'service'].forEach(injectionTarget => {
            application.inject(injectionTarget, 'notifications', 'notification-messages:service');
        });
    }
};
