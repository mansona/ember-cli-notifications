import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | basic');

test('Trigger notification', function(assert) {
  visit('/');
  andThen(() => {
    const $container = find('div[class*=c-notification__container]');
    assert.equal($container.length, 1, "Notification container should exist");
    assert.equal($container.children().length, 0, "Notification container should be initially empty");
    click('#example-options-1 input[value=info]');
    click('button#run-example-1');
    // FIXME: Shouldn't need to use setTimeout here, but `andThen` seems to
    // wait until after the notification auto-dismisses for some reason
    window.setTimeout(() => {
      const $notification = find('div[class*=c-notification__container] > div[class*=c-notification]');
      assert.equal($notification.length, 1, "There should be 1 notification");
      assert.ok($notification.is('[class*=c-notification--info]'), "Notification should be 'info' type");
    }, 250);
  });
});
