import Ember from 'ember';
import layout from '../templates/components/notification-container';
import styles from '../styles/components/notification-container';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  styles,

  classNameBindings: [
    'styles.c-notification__container',
    'computedPosition'
  ],

  computedPosition: computed('position', function() {
    if (this.get('position')) return this.get(`styles.c-notification__container--${this.get('position')}`);

    return this.get(`styles.c-notification__container--top`);
  })
});
