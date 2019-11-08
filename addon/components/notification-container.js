import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/notification-container';
import styles from '../styles/components/notification-container';

export default Component.extend({
  position: 'top',
  layout,
  styles,

  classNameBindings: ['computedPosition'],
  attributeBindings: ['computedStyle:style', 'position:data-test-notification-container', 'ariaLive:aria-live', 'role'],

  zindex: '1060',
  role: 'status',
  ariaLive: 'polite',

  computedPosition: computed('position', function() {
    return this.get(`styles.c-notification__container--${this.get('position')}`);
  }),

  computedStyle: computed('zindex', function() {
    return htmlSafe(`z-index: ${this.get('zindex')};`);
  })
});
