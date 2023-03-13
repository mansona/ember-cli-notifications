/* eslint-disable ember/no-settled-after-test-helper */
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | notification message', function (hooks) {
  setupRenderingTest(hooks);

  test('clicking the notification calls the callback defined on the notification message', async function (assert) {
    assert.expect(1);

    await render(hbs`<NotificationContainer />`);
    let notifications = this.owner.lookup('service:notifications');

    notifications.error('Something went wrong. Click to try again', {
      onClick() {
        assert.ok(true);
      },
    });

    await settled();

    await click('.c-notification__content');
  });

  test('clicking the notification close button does not call the callback defined on the notification message, but does call the onDismiss callback defined on the notification message', async function (assert) {
    assert.expect(1);

    await render(hbs`<NotificationContainer />`);
    let notifications = this.owner.lookup('service:notifications');

    notifications.error('Something went wrong. Click to try again', {
      onClick() {
        throw new Error('this should not be run!');
      },
      onDismiss() {
        assert.ok(true);
      },
    });

    await settled();
    await click('.c-notification__close');
    await settled();
  });
});
