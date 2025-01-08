import Component, { setComponentTemplate } from '@ember/component';
import { htmlSafe } from '@ember/template';
import { computed, action, set } from '@ember/object';
import { inject } from '@ember/service';
import './notification-message.css';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i, n } from 'decorator-transforms/runtime';

var TEMPLATE = precompileTemplate("{{! template-lint-disable no-invalid-interactive no-triple-curlies }}\n<div\n  class=\"c-notification\n    {{this.dismissClass}}\n    {{this.clickableClass}}\n    {{if this.validType (concat \"c-notification--\" this.validType) \"\"}}\n    {{@notification.cssClasses}}\"\n  data-test-notification-message={{@notification.type}}\n  {{on \"mouseenter\" this.handleMouseEnter}}\n  {{on \"mouseleave\" this.handleMouseLeave}}\n>\n  <div class=\"c-notification__icon\">\n    {{#if this.validType}}\n      {{#if this.isInfo}}\n        <EcnIconInfo class=\"c-notification__svg\" />\n      {{else if this.isSuccess}}\n        <EcnIconSuccess class=\"c-notification__svg\" />\n      {{else if this.isWarning}}\n        <EcnIconWarning class=\"c-notification__svg\" />\n      {{else if this.isError}}\n        <EcnIconError class=\"c-notification__svg\" />\n      {{/if}}\n    {{/if}}\n  </div>\n  <div class=\"c-notification__content\" {{on \"click\" this.handleOnClick}}>\n    {{#if @notification.htmlContent}}\n      {{{@notification.message}}}\n    {{else}}\n      {{@notification.message}}\n    {{/if}}\n    <div\n      class=\"c-notification__close\"\n      {{on \"click\" this.removeNotification}}\n      title=\"Dismiss this notification\"\n    >\n      <EcnIconClose class=\"c-notification__svg\" />\n    </div>\n  </div>\n\n  {{#if @notification.autoClear}}\n    <div\n      class=\"c-notification__countdown\"\n      style={{this.notificationClearDuration}}\n    ></div>\n  {{/if}}\n</div>");

/* eslint-disable ember/no-classic-components, ember/no-computed-properties-in-native-classes */
const availableTypes = ['info', 'success', 'warning', 'error'];
class NotificationMessage extends Component {
  tagName = '';
  static {
    g(this.prototype, "notifications", [inject]);
  }
  #notifications = (i(this, "notifications"), undefined);
  paused = false;
  get dismissClass() {
    return !this.notification.dismiss ? 'c-notification--in' : '';
  }
  static {
    n(this.prototype, "dismissClass", [computed('notification.dismiss')]);
  }
  get clickableClass() {
    return this.notification.onClick ? 'c-notification--clickable' : '';
  }
  static {
    n(this.prototype, "clickableClass", [computed('notification.onClick')]);
  }
  get validType() {
    let type = this.notification.type;
    if (!type || availableTypes.indexOf(type) === -1) {
      return '';
    }
    return type;
  }
  static {
    n(this.prototype, "validType", [computed('notification.type')]);
  }
  get isInfo() {
    return this.validType === 'info';
  }
  static {
    n(this.prototype, "isInfo", [computed('validType')]);
  }
  get isSuccess() {
    return this.validType === 'success';
  }
  static {
    n(this.prototype, "isSuccess", [computed('validType')]);
  }
  get isWarning() {
    return this.validType === 'warning';
  }
  static {
    n(this.prototype, "isWarning", [computed('validType')]);
  }
  get isError() {
    return this.validType === 'error';
  }

  // Apply the clear animation duration rule inline
  static {
    n(this.prototype, "isError", [computed('validType')]);
  }
  get notificationClearDuration() {
    const duration = Number.parseInt(this.notification.clearDuration, 10);
    const playState = this.paused ? 'paused' : 'running';
    const styles = [`animation-duration: ${duration}ms`, `animation-play-state: ${playState}`].join(';');
    return htmlSafe(styles);
  }
  static {
    n(this.prototype, "notificationClearDuration", [computed('paused', 'notification.clearDuration')]);
  }
  handleOnClick(event) {
    event.preventDefault();
    this.notification.onClick?.(this.notification);
  }
  static {
    n(this.prototype, "handleOnClick", [action]);
  }
  removeNotification(event) {
    event.preventDefault();
    event.stopPropagation();
    this.notifications.removeNotification(this.notification);
  }
  static {
    n(this.prototype, "removeNotification", [action]);
  }
  handleMouseEnter() {
    if (this.notification.autoClear) {
      set(this, 'paused', true);
      this.notifications.pauseAutoClear(this.notification);
    }
  }
  static {
    n(this.prototype, "handleMouseEnter", [action]);
  }
  handleMouseLeave() {
    if (this.notification.autoClear) {
      set(this, 'paused', false);
      this.notifications.setupAutoClear(this.notification);
    }
  }
  static {
    n(this.prototype, "handleMouseLeave", [action]);
  }
}
setComponentTemplate(TEMPLATE, NotificationMessage);

export { NotificationMessage as default };
//# sourceMappingURL=notification-message.js.map
