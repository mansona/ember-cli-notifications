/* eslint-disable ember/no-classic-components, ember/no-computed-properties-in-native-classes */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { inject as service } from '@ember/service';

import './notification-container.css';

export default class NotificationContainerComponent extends Component {
  @service notifications;

  tagName = '';
  position = 'top';
  zindex = '1060';

  @computed('position')
  get positionClass() {
    return `ember-cli-notifications-notification__container--${this.position}`;
  }

  @computed('zindex')
  get inlineStyle() {
    return htmlSafe(`z-index: ${this.zindex};`);
  }
}
