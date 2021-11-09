# ember-cli-notifications

[![Download count all time](https://img.shields.io/npm/dt/ember-cli-notifications.svg)](https://www.npmjs.com/package/ember-cli-notifications)
[![NPM package](https://img.shields.io/npm/v/ember-cli-notifications.svg)](https://www.npmjs.com/package/ember-cli-notifications)
[![Build Status](https://travis-ci.org/mansona/ember-cli-notifications.svg?branch=master)](https://travis-ci.org/mansona/ember-cli-notifications)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-notifications.svg)](http://emberobserver.com/addons/ember-cli-notifications)
[![Maintainability](https://api.codeclimate.com/v1/badges/2d7784a2ad1c27cb8250/maintainability)](https://codeclimate.com/github/mansona/ember-cli-notifications/maintainability)


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.8 or above
* Ember CLI v3.8 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-notifications
```


Usage
------------------------------------------------------------------------------

An [Ember](http://emberjs.com) addon that adds [Atom](https://github.com/atom/notifications) inspired notification messages to your app.

Interactive documentation can be found [here](https://ember-cli-notifications.netlify.com).

### Upgrading to 5.0.0

#### Icons and FontAwesome

As of 5.0.0 we no longer depend on Font Awesome so you can remove any configuration you have related to the icons:

```js
var ENV = {
  'ember-cli-notifications': {
    includeFontAwesome: true
  }
}
```

or

```js
var ENV = {
  'ember-cli-notifications': {
    icons: 'bootstrap'
  }
}
```

#### Service Name

We have also updated the name of the service to be simply `notifications` so you can now inject the notifications service with a much simpler inject statement:

```js
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notifications: service(),
});
```

#### Removing CSS modules

We have removed the use of CSS Modules so you can now override the styles more effectively without needing as many hacks. You can remove any strange hacks that you might have implemented in your app to override styles.

Contributing
------------------------------------------------------------------------------
See the [Contributing](CONTRIBUTING.md) guide for details.
