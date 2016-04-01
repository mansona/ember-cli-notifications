import Ember from 'ember';
import layout from '../templates/components/notification-container';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['c-notification__container'],
  classNameBindings: [
    'computedPosition'
  ],

  computedPosition: Ember.computed('position', function() {
    if (this.get('position')) return `c-notification__container--${this.get('position')}`;

    return `c-notification__container--top`;
  })
});
