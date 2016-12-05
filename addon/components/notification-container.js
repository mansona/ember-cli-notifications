import Ember from 'ember';
import layout from '../templates/components/notification-container';
import styles from '../styles/components/notification-container';

const { Component, computed } = Ember;

export default Component.extend({
  layout,
  styles,

  classNameBindings: ['computedPosition'],

  computedPosition: computed('position', function() {
    if (this.get('position')) return this.get(`styles.c-notification__container--${this.get('position')}`);

    return this.get(`styles.c-notification__container--top`);
  })
});
