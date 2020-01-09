import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | notification message', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    let svgs = {
      'success': 'success',
      'warning': 'warning',
      'info': 'info',
      'error': 'error',
    };

    let notification = {
      type: 'info',
    }

    this.setProperties({
      'svgs': svgs,
      notification
    });

    await render(hbs`{{notification-message svgs=svgs notification=notification}}`);

    assert.equal(find('*').textContent.trim(), '');
  });
});
