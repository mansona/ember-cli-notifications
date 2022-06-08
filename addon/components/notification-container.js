/* eslint-disable ember/no-classic-components, ember/no-computed-properties-in-native-classes */
import Component from '@ember/component';
import { inject as service } from '@ember/service';

import layout from '../templates/components/notification-container';

export default class NotificationContainerComponent extends Component {
  @service notifications;

  tagName = '';
  layout = layout;
  position = 'top';
}
