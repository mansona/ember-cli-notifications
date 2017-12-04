import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | basic usage', {
  needs: ['service:notification-messages']
});

test('click show works with no config changes', function(assert) {
  visit('/');

  click('[data-test-button-html-show]');

  andThen(function() {
    assert.equal(find('[data-test-notification-container] [data-test-notification-message]').text().trim(), 'Notification message');
    assert.equal(find('[data-test-notification-container] [data-test-notification-message]').attr('data-test-notification-message'), 'success');
  });
});

test('info message works', function(assert) {
  visit('/');

  click('[data-test-radio-html] [value="info"]');
  click('[data-test-button-html-show]');

  andThen(function() {
    assert.equal(find('[data-test-notification-container] [data-test-notification-message]').text().trim(), 'Notification message');
    assert.equal(find('[data-test-notification-container] [data-test-notification-message]').attr('data-test-notification-message'), 'info');
  });
});

test('error message works', function(assert) {
  visit('/');

  click('[data-test-radio-html] [value="error"]');
  click('[data-test-button-html-show]');

  andThen(function() {
    assert.equal(find('[data-test-notification-container] [data-test-notification-message]').text().trim(), 'Notification message');
    assert.equal(find('[data-test-notification-container] [data-test-notification-message]').attr('data-test-notification-message'), 'error');
  });
});

test('warning message works', function(assert) {
  visit('/');

  click('[data-test-radio-html] [value="warning"]');
  click('[data-test-button-html-show]');

  andThen(function() {
    assert.equal(find('[data-test-notification-container] [data-test-notification-message]').text().trim(), 'Notification message');
    assert.equal(find('[data-test-notification-container] [data-test-notification-message]').attr('data-test-notification-message'), 'warning');
  });
});
