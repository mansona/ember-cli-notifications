# ember-cli-notifications

[![Greenkeeper badge](https://badges.greenkeeper.io/stonecircle/ember-cli-notifications.svg)](https://greenkeeper.io/)

[![Download count all time](https://img.shields.io/npm/dt/ember-cli-notifications.svg)](https://www.npmjs.com/package/ember-cli-notifications)
[![NPM package](https://img.shields.io/npm/v/ember-cli-notifications.svg)](https://www.npmjs.com/package/ember-cli-notifications)
[![Build Status](https://travis-ci.org/ynnoj/ember-cli-notifications.svg?branch=master)](https://travis-ci.org/ynnoj/ember-cli-notifications)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-notifications.svg)](http://emberobserver.com/addons/ember-cli-notifications)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)

An [ember-cli] addon that adds [atom] inspired notification messages to your app.

Interactive documentation can be found [here].

## Installation

```shell
ember install ember-cli-notifications
```

## 4.0.0

As of 4.0.0, the addon is service based. You will need to inject the service into your consuming app.

```js
notifications: Ember.inject.service('notification-messages')
```

See the [documentation] for a sample initializer to inject the service into all controllers, routes and components.

[ember-cli]: http://ember-cli.com
[atom]: https://github.com/atom/notifications
[here]: http://ynnoj.github.io/ember-cli-notifications
[documentation]: http://ynnoj.github.io/ember-cli-notifications
