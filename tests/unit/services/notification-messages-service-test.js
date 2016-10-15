import NotificationMessages from 'ember-cli-notifications/services/notification-messages-service';
import { module, test } from 'qunit';

module('Unit | Service | notification messages');

test('it supports fluent syntax', function(assert) {
  const msg = 'returns notification message service';
  const service = NotificationMessages.create();

  assert.equal(service.error('test'), service, msg);
  assert.equal(service.info('test'), service, msg);
  assert.equal(service.success('test'), service, msg);
  assert.equal(service.warning('test'), service, msg);
  assert.equal(service.warning('test'), service, msg);
  assert.equal(service.clearAll(), service, msg);
});
