import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty, b as _defineProperty } from '../_rollupPluginBabelHelpers-e795903d.js';
import Component, { setComponentTemplate } from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { inject } from '@ember/service';
import './notification-container.css';
import { precompileTemplate } from '@ember/template-compilation';

var TEMPLATE = precompileTemplate("<div\n  class=\"ember-cli-notifications-notification__container {{this.positionClass}}\"\n  style={{this.inlineStyle}}\n  data-test-notification-container={{this.position}}\n>\n  {{#each this.notifications.content as |notification|}}\n    <NotificationMessage @notification={{notification}} />\n  {{/each}}\n</div>");

var _dec, _dec2, _class, _descriptor;
let NotificationContainerComponent = (_dec = computed('position'), _dec2 = computed('zindex'), (_class = class NotificationContainerComponent extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "notifications", _descriptor, this);
    _defineProperty(this, "tagName", '');
    _defineProperty(this, "position", 'top');
    _defineProperty(this, "zindex", '1060');
  }
  get positionClass() {
    return `ember-cli-notifications-notification__container--${this.position}`;
  }
  get inlineStyle() {
    return htmlSafe(`z-index: ${this.zindex};`);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "notifications", [inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "positionClass", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "positionClass"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "inlineStyle", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "inlineStyle"), _class.prototype)), _class));
setComponentTemplate(TEMPLATE, NotificationContainerComponent);

export { NotificationContainerComponent as default };
//# sourceMappingURL=notification-container.js.map
