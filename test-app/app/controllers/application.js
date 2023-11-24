import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  message = 'Notification message';
  htmlMessage = '<b>HTML</b> notification message';
  type = 'success';
  autoClear = false;
  clearDuration = 2800;
  htmlContent = false;
  position = 'top';
  zindex = '9999';
  clearAll = true;
  cssClasses = 'profile-saved-success-notification';

  @service
  notifications;

  get disableTimeoutInput() {
    return !this.autoClear;
  }

  get computedMessage() {
    if (this.htmlContent) {
      return this.htmlMessage;
    }

    return this.message;
  }

  @action
  showNotifcation() {
    if (this.clearAll) {
      this.notifications.clearAll();
    }
    this.notifications.addNotification({
      cssClasses: this.cssClasses,
      message: this.computedMessage,
      type: this.type,
      autoClear: this.autoClear,
      clearDuration: this.clearDuration,
      htmlContent: this.htmlContent,
    });
  }
}
