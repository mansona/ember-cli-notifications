/* eslint-disable ember/no-classic-components, ember/no-computed-properties-in-native-classes */
import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import { action, computed, set } from '@ember/object';
import { inject as service } from '@ember/service';

import layout from '../templates/components/notification-message';

const availableTypes = ['info', 'success', 'warning', 'error'];

export default class NotificationMessage extends Component {
  layout = layout;
  tagName = '';
  @service notifications;

  paused = false;

  @computed('notification.dismiss')
  get dismissClass() {
    return !this.notification.dismiss ? 'c-notification--in' : '';
  }

  @computed('notification.onClick')
  get clickableClass() {
    return this.notification.onClick ? 'c-notification--clickable' : '';
  }

  @computed('notification.type')
  get validType() {
    let type = this.notification.type;

    if (!type || availableTypes.indexOf(type) === -1) {
      return '';
    }

    return type;
  }

  @computed('validType')
  get isInfo() {
    return this.validType === 'info';
  }

  @computed('validType')
  get isSuccess() {
    return this.validType === 'success';
  }

  @computed('validType')
  get isWarning() {
    return this.validType === 'warning';
  }

  @computed('validType')
  get isError() {
    return this.validType === 'error';
  }

  // Apply the clear animation duration rule inline
  @computed('paused', 'notification.clearDuration')
  get notificationClearDuration() {
    const duration = Number.parseInt(this.notification.clearDuration, 10);
    const playState = this.paused ? 'paused' : 'running';
    const styles = [
      `animation-duration: ${duration}ms`,
      `animation-play-state: ${playState}`,
    ].join(';');

    return htmlSafe(styles);
  }

  @action
  handleOnClick(event) {
    event.preventDefault();
    this.notification.onClick?.(this.notification);
  }

  @action
  removeNotification(event) {
    event.preventDefault();
    event.stopPropagation();
    this.notifications.removeNotification(this.notification);
  }

  @action
  handleMouseEnter() {
    if (this.notification.autoClear) {
      set(this, 'paused', true);
      this.notifications.pauseAutoClear(this.notification);
    }
  }

  @action
  handleMouseLeave() {
    if (this.notification.autoClear) {
      set(this, 'paused', false);
      this.notifications.setupAutoClear(this.notification);
    }
  }
}
