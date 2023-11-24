/* eslint-disable qunit/no-assert-equal */
import { find, click, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | basic usage', function (hooks) {
  setupApplicationTest(hooks);

  test('click show works with no config changes', async function (assert) {
    await visit('/');

    await click('[data-test-button-html-show]');

    assert.equal(
      find(
        '[data-test-notification-container] [data-test-notification-message]',
      ).textContent.trim(),
      'Notification message',
    );
    assert.equal(
      find(
        '[data-test-notification-container] [data-test-notification-message]',
      ).getAttribute('data-test-notification-message'),
      'success',
    );
  });

  test('info message works', async function (assert) {
    await visit('/');

    await click('[data-test-radio-html] [value="info"]');
    await click('[data-test-button-html-show]');

    assert.equal(
      find(
        '[data-test-notification-container] [data-test-notification-message]',
      ).textContent.trim(),
      'Notification message',
    );
    assert.equal(
      find(
        '[data-test-notification-container] [data-test-notification-message]',
      ).getAttribute('data-test-notification-message'),
      'info',
    );
  });

  test('error message works', async function (assert) {
    await visit('/');

    await click('[data-test-radio-html] [value="error"]');
    await click('[data-test-button-html-show]');

    assert.equal(
      find(
        '[data-test-notification-container] [data-test-notification-message]',
      ).textContent.trim(),
      'Notification message',
    );
    assert.equal(
      find(
        '[data-test-notification-container] [data-test-notification-message]',
      ).getAttribute('data-test-notification-message'),
      'error',
    );
  });

  test('warning message works', async function (assert) {
    await visit('/');

    await click('[data-test-radio-html] [value="warning"]');
    await click('[data-test-button-html-show]');

    assert.equal(
      find(
        '[data-test-notification-container] [data-test-notification-message]',
      ).textContent.trim(),
      'Notification message',
    );
    assert.equal(
      find(
        '[data-test-notification-container] [data-test-notification-message]',
      ).getAttribute('data-test-notification-message'),
      'warning',
    );
  });

  test('make sure setDefaultAutoClear is working', async function (assert) {
    await visit('/');

    let notificationService = this.owner.lookup('service:notifications');

    notificationService.setDefaultAutoClear(true);

    await click('[data-test-button-html-show]');

    assert.equal(
      find(
        '[data-test-notification-container] [data-test-notification-message]',
      ).textContent.trim(),
      'Notification message',
    );
    assert.equal(
      find(
        '[data-test-notification-container] [data-test-notification-message]',
      ).getAttribute('data-test-notification-message'),
      'success',
    );

    notificationService.setDefaultAutoClear(false);
  });
});
