# ember-cli-notifications

[![NPM package](https://img.shields.io/npm/v/ember-cli-notifications.svg)](https://www.npmjs.com/package/ember-cli-notifications) [![Build Status](https://img.shields.io/travis/stonecircle/ember-cli-notifications.svg)](https://travis-ci.org/stonecircle/ember-cli-notifications) [![Ember Observer Score](http://emberobserver.com/badges/ember-cli-notifications.svg)](http://emberobserver.com/addons/ember-cli-notifications)


An [Ember CLI] addon that adds [Atom] inspired notification messages to your app.

Check out the [demo].

## Installation

```shell
ember install ember-cli-notifications
```

## Usage

In v3.1.0 we simplified the API for calling notifications in your Ember application. These were **not** breaking changes and using the pre v3.1.0 API will still work today.

The old API documentation can be viewed [here](https://github.com/Blooie/ember-cli-notifications/blob/v3.0.0/README.md).

### Add a notification

There are four types of notification available.

```js
// Info
this.notifications.info('You have one unread message');

// Error
this.notifications.error('Something went wrong');

// Success
this.notifications.success('Saved successfully!');

// Warning
this.notifications.warning('You have unsaved changes');
```

### Add a notification with autoClear

```js
actions: {
  saveOptions() {
    this.get('model').save()
    .then(() => {
      this.notifications.success('Successfully saved your settings', {
        autoClear: true
      });
    }),
    .catch((err) => {
      this.notifications.error('Something went wrong');
    });
  }
}
```

### Remove all active notifications using clearAll() before adding a new notification

```js
actions: {
  saveOptions() {
    this.get('model').save()
    .then(() => {
      this.notifications.clearAll();
      this.notifications.success('Successfully saved your settings');
    })
  }
}
```

### Set a global, default duration time

This code only needs to be called in one place such as your application route.

```js
this.notifications.setDefaultClearNotification(1000);
```

### Set a global, default auto clear option

This code only needs to be called in one place such as your application route.

```js
this.notifications.setDefaultAutoClear(true);
```

### Template

Include this snippet in your Handlebars template to display the notifications.

```hbs
{{notification-container notifications=notifications}}
```

## Icons

[Font Awesome] is required as part of the addon to display the message type icons on the notifications.

If Font Awesome is not already included in the consuming application, add the following to your applications `config/environment.js` file as a property of the `ENV` object.

```js
var ENV = {
  'ember-cli-notifications': {
    includeFontAwesome: true
  }
}
```

Alternatively, you can use [Glyphicons] that are packaged with Bootstrap. Glyphicons are **not** added to your application via this addon.

```js
var ENV = {
  'ember-cli-notifications': {
    icons: 'bootstrap'
  }
}
```

## Options

### Auto clear

Boolean value that defines whether the notification message dismisses automatically, or whether it needs to be dismissed manually by the user.

If true, inherits the default `clearDuration` value unless specified.

*Default value is `false`*

#### Example

```js
this.notifications.success('Successfully saved your settings', {
  autoClear: true
});
```

### Clear duration

The time in milliseconds that the notification will automatically dismiss after, if `autoClear` is `true`.

*Default value is `3200`*

#### Example

```js
this.notifications.success('Successfully saved your settings', {
  autoClear: true,
  clearDuration: 1200
});
```

[Ember CLI]: http://ember-cli.com
[Atom]: https://github.com/atom/notifications
[demo]: http://stonecircle.github.io/ember-cli-notifications
[broccoli-sass]: https://www.npmjs.com/package/broccoli-sass
[Font Awesome]: http://fortawesome.github.io/Font-Awesome
[Glyphicons]: http://getbootstrap.com/components/#glyphicons
