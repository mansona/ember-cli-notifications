import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | basic');


test('Trigger notification on demo page', function(assert) {
  visit('/');
  andThen(() => {
    const $container = find('div[class*=c-notification__container]');
    assert.equal($container.length, 1, "Notification container should exist");
    assert.equal($container.children().length, 0, "Notification container should be initially empty");
    click('#example-options-1 input[value=info]');
    click('button#run-example-1');

    // FIXME: Shouldn't need to use setTimeout here, but `andThen` seems to
    // wait until after the notification auto-dismisses for some reason.
    // TODO: Try using waitFor or waitUntil once they are available:
    // https://github.com/emberjs/ember-test-helpers/blob/master/API.md#wait-helpers
    setTimeout(() => {
      const $notification = find('div[class*=c-notification__container] > div[class*=c-notification]');
      assert.equal($notification.length, 1, "There should be 1 notification");
      assert.ok($notification.is('[class*=c-notification--info]'), "Notification should be 'info' type");
    }, 100);
  });
});


test('Trigger default notification', function(assert) {
  visit('/');
  // Here we simulate what would happen if the consuming application did not define an `ember-cli-notifications`
  // property in their configuration. This test only works when the code being tested reads these configuration
  // options through `Application.resolveRegistration('config:environment')['ember-cli-notifications']`
  // rather than by reading the `config/environment.js` file directly (as `ember-get-config` does)
  delete this.application.resolveRegistration('config:environment')['ember-cli-notifications'];

  andThen(() => {
    const buttonSelector ='button#showDefaultWarning-button';
    const $button = find(buttonSelector);
    assert.equal($button.length, 1, "There should be 1 button for this test");
    click(buttonSelector);
    andThen(() => {
      const $notification = find('div[class*=c-notification__container] > div[class*=c-notification]');
      assert.equal($notification.length, 1, "There should be 1 notification");
    });
  });
});


