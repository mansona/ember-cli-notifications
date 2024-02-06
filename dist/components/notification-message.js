import { _ as _applyDecoratedDescriptor, b as _defineProperty, a as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-e795903d.js';
import Component, { setComponentTemplate } from '@ember/component';
import { htmlSafe } from '@ember/template';
import { computed, action, set } from '@ember/object';
import { inject } from '@ember/service';
import './notification-message.css';
import { precompileTemplate } from '@ember/template-compilation';

var TEMPLATE = precompileTemplate("{{! template-lint-disable no-invalid-interactive no-triple-curlies }}\n<div\n  class=\"c-notification\n    {{this.dismissClass}}\n    {{this.clickableClass}}\n    {{if this.validType (concat \"c-notification--\" this.validType) \"\"}}\n    {{@notification.cssClasses}}\"\n  data-test-notification-message={{@notification.type}}\n  {{on \"mouseenter\" this.handleMouseEnter}}\n  {{on \"mouseleave\" this.handleMouseLeave}}\n>\n  <div class=\"c-notification__icon\">\n    {{#if this.validType}}\n      {{#if this.isInfo}}\n        <EcnIconInfo class=\"c-notification__svg\" />\n      {{else if this.isSuccess}}\n        <EcnIconSuccess class=\"c-notification__svg\" />\n      {{else if this.isWarning}}\n        <EcnIconWarning class=\"c-notification__svg\" />\n      {{else if this.isError}}\n        <EcnIconError class=\"c-notification__svg\" />\n      {{/if}}\n    {{/if}}\n  </div>\n  <div class=\"c-notification__content\" {{on \"click\" this.handleOnClick}}>\n    {{#if @notification.htmlContent}}\n      {{{@notification.message}}}\n    {{else}}\n      {{@notification.message}}\n    {{/if}}\n    <div\n      class=\"c-notification__close\"\n      {{on \"click\" this.removeNotification}}\n      title=\"Dismiss this notification\"\n    >\n      <EcnIconClose class=\"c-notification__svg\" />\n    </div>\n  </div>\n\n  {{#if @notification.autoClear}}\n    <div\n      class=\"c-notification__countdown\"\n      style={{this.notificationClearDuration}}\n    ></div>\n  {{/if}}\n</div>");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _descriptor;
const availableTypes = ['info', 'success', 'warning', 'error'];
let NotificationMessage = (_dec = computed('notification.dismiss'), _dec2 = computed('notification.onClick'), _dec3 = computed('notification.type'), _dec4 = computed('validType'), _dec5 = computed('validType'), _dec6 = computed('validType'), _dec7 = computed('validType'), _dec8 = computed('paused', 'notification.clearDuration'), (_class = class NotificationMessage extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "tagName", '');
    _initializerDefineProperty(this, "notifications", _descriptor, this);
    _defineProperty(this, "paused", false);
  }
  get dismissClass() {
    return !this.notification.dismiss ? 'c-notification--in' : '';
  }
  get clickableClass() {
    return this.notification.onClick ? 'c-notification--clickable' : '';
  }
  get validType() {
    let type = this.notification.type;
    if (!type || availableTypes.indexOf(type) === -1) {
      return '';
    }
    return type;
  }
  get isInfo() {
    return this.validType === 'info';
  }
  get isSuccess() {
    return this.validType === 'success';
  }
  get isWarning() {
    return this.validType === 'warning';
  }
  get isError() {
    return this.validType === 'error';
  }

  // Apply the clear animation duration rule inline
  get notificationClearDuration() {
    const duration = Number.parseInt(this.notification.clearDuration, 10);
    const playState = this.paused ? 'paused' : 'running';
    const styles = [`animation-duration: ${duration}ms`, `animation-play-state: ${playState}`].join(';');
    return htmlSafe(styles);
  }
  handleOnClick(event) {
    event.preventDefault();
    this.notification.onClick?.(this.notification);
  }
  removeNotification(event) {
    event.preventDefault();
    event.stopPropagation();
    this.notifications.removeNotification(this.notification);
  }
  handleMouseEnter() {
    if (this.notification.autoClear) {
      set(this, 'paused', true);
      this.notifications.pauseAutoClear(this.notification);
    }
  }
  handleMouseLeave() {
    if (this.notification.autoClear) {
      set(this, 'paused', false);
      this.notifications.setupAutoClear(this.notification);
    }
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "notifications", [inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "dismissClass", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "dismissClass"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clickableClass", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "clickableClass"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validType", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "validType"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isInfo", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "isInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isSuccess", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "isSuccess"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isWarning", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "isWarning"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isError", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "isError"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "notificationClearDuration", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "notificationClearDuration"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleOnClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleOnClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeNotification", [action], Object.getOwnPropertyDescriptor(_class.prototype, "removeNotification"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseEnter", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseEnter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseLeave", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseLeave"), _class.prototype)), _class));
setComponentTemplate(TEMPLATE, NotificationMessage);

export { NotificationMessage as default };
//# sourceMappingURL=notification-message.js.map
