import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import { inject as service } from '@ember/service';

import layout from '../templates/components/notification-container';

export default Component.extend({
  layout,
  position: 'top',
  notifications: service(),

  classNameBindings: ['computedPosition', ':ember-cli-notifications-notification__container'],
  attributeBindings: ['computedStyle:style', 'position:data-test-notification-container'],

  zindex: '1060',

  computedPosition: computed('position', function() {
    return `ember-cli-notifications-notification__container--${this.get('position')}`;
  }),

  computedStyle: computed('zindex', function() {
    return htmlSafe(`z-index: ${this.get('zindex')};`);
  })
});
