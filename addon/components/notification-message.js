/* eslint-disable ember/no-classic-components, ember/no-computed-properties-in-native-classes */
import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import { action, computed, set } from '@ember/object';
import { inject as service } from '@ember/service';

import layout from '../templates/components/notification-message';

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
  get notificationSVGPath() {
    switch (this.notification.type) {
      case 'error':
      case 'info':
        return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z';
      case 'success':
        return 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z';
      case 'warning':
        return 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z';
    }

    return '';
  }

  @computed('notification.type')
  get processedType() {
    let type = this.notification.type;

    if (type && ['info', 'success', 'warning', 'error'].indexOf(type) !== -1) {
      return `c-notification--${this.notification.type}`;
    }

    return '';
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
