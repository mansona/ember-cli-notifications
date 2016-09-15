# ember-cli-notifications

![Download count all time](https://img.shields.io/npm/dt/ember-cli-notifications.svg)
[![NPM package](https://img.shields.io/npm/v/ember-cli-notifications.svg)](https://www.npmjs.com/package/ember-cli-notifications) [![Build Status](https://img.shields.io/travis/stonecircle/ember-cli-notifications.svg)](https://travis-ci.org/stonecircle/ember-cli-notifications) [![Ember Observer Score](http://emberobserver.com/badges/ember-cli-notifications.svg)](http://emberobserver.com/addons/ember-cli-notifications)


An [Ember CLI] addon that adds [Atom] inspired notification messages to your app.

Interactive documentation can be found [here].

**As of 4.0.0 the addon is now service based. You will need to inject the service into your consuming app.**

```js
notifications: Ember.inject.service('notification-messages')
```

See the documentation for a sample initializer to inject the service in all controllers.

## Installation

```shell
ember install ember-cli-notifications
```

[Ember CLI]: http://ember-cli.com
[Atom]: https://github.com/atom/notifications
[here]: http://stonecircle.github.io/ember-cli-notifications
