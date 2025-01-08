import Component, { setComponentTemplate } from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { inject } from '@ember/service';
import './notification-container.css';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i, n } from 'decorator-transforms/runtime';

var TEMPLATE = precompileTemplate("<div\n  class=\"ember-cli-notifications-notification__container {{this.positionClass}}\"\n  style={{this.inlineStyle}}\n  data-test-notification-container={{this.position}}\n>\n  {{#each this.notifications.content as |notification|}}\n    <NotificationMessage @notification={{notification}} />\n  {{/each}}\n</div>");

/* eslint-disable ember/no-classic-components, ember/no-computed-properties-in-native-classes */
class NotificationContainerComponent extends Component {
  static {
    g(this.prototype, "notifications", [inject]);
  }
  #notifications = (i(this, "notifications"), undefined);
  tagName = '';
  position = 'top';
  zindex = '1060';
  get positionClass() {
    return `ember-cli-notifications-notification__container--${this.position}`;
  }
  static {
    n(this.prototype, "positionClass", [computed('position')]);
  }
  get inlineStyle() {
    return htmlSafe(`z-index: ${this.zindex};`);
  }
  static {
    n(this.prototype, "inlineStyle", [computed('zindex')]);
  }
}
setComponentTemplate(TEMPLATE, NotificationContainerComponent);

export { NotificationContainerComponent as default };
//# sourceMappingURL=notification-container.js.map
