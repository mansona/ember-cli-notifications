import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | notification container', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // setup an empty notification-messages-service
    this.owner.register('service:notification-messages-service', {});

    await render(hbs`{{notification-container}}`);

    assert.equal(find('*').textContent.trim(), '');
  });
});
