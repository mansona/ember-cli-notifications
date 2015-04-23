# ember-cli-notifications [![NPM package](https://img.shields.io/npm/v/ember-cli-notifications.svg)](https://www.npmjs.com/package/ember-cli-notifications) [![Build Status](https://img.shields.io/travis/Blooie/ember-cli-notifications.svg)](https://travis-ci.org/Blooie/ember-cli-notifications)


An [Ember CLI] addon that adds [Atom] inspired notification messages to your app.

Check out the [demo].

## Installation

```shell
ember install ember-cli-notifications
```

## Usage

From within your controller or route.

Add a notification
```js
actions: {
    saveOptions() {
        this.notifications.addNotification({
            message: 'Saved successfully!',
            type: 'success'
        });
    }
}
```

Add a notification with autoClear
```js
actions: {
    saveOptions() {
        this.get('model').save()
        .then(() => {
            this.notifications.addNotification({
                message: 'Successfully saved your settings',
                type: 'success',
                autoClear: true
            });
        }),
        .catch((err) => {
            this.notifications.addNotification({
                message: 'Something went wrong'
                type: 'error'
            });
        });
    }
}
```

Remove all active notifications using clearAll() before adding a new notification
```js
actions: {
    saveOptions() {
        this.get('model').save()
        .then(() => {
            this.notifications.clearAll();
            this.notifications.addNotification({
                message: 'Successfully saved your settings',
                type: 'success'
            });
        })
    }
}
```
### Template

Include this snippet in your Handlebars template to display the notifications.

```hbs
<div class="notifications-container">
    {{#each notifications as |notification|}}
        {{notification-message notification=notification}}
    {{/each}}
</div>
```

## Font Awesome

[Font Awesome] is required as part of the addon to display the message type icons on the notifications.

If Font Awesome is not already included in the consuming application, add the following your applications `config/environment.js` file.

```js
'ember-cli-notifications': {
    includeFontAwesome: true
}
```

## Options

### Message

The string that is displayed within the notification. This is the only **required** option.

#### Example

```js
this.notifications.addNotification({
    message: 'Successfully saved your settings'
});
```

### Type

Define the type of notification that should be presented. This sets the CSS of the notification, as well as the [Font Awesome] icon.

*Default value is `info`*

#### Options

* `error`
* `info`
* `success`
* `warning`

#### Example

```js
this.notifications.addNotification({
    message: 'Successfully saved your settings',
    type: 'success'
});
```

### Auto clear

Boolean value that defines whether the notification message dismisses automatically, or whether it needs to be dismissed manually by the user.

If true, inherits the default `clearDuration` value unless specified.

*Default value is `false`*

#### Options

* `false`
* `true`

#### Example

```js
this.notifications.addNotification({
    message: 'Successfully saved your settings',
    type: 'success',
    autoClear: true
});
```

### Clear duration

The time in milliseconds that the notification will automatically dismiss after, if `autoClear` is `true`.

*Default value is `3200`*

#### Example

```js
this.notifications.addNotification({
    message: 'Successfully saved your settings',
    type: 'success',
    autoClear: true,
    clearDuration: 1200
});
```

[Ember CLI]: http://ember-cli.com
[Atom]: https://github.com/atom/notifications
[demo]: http://blooie.github.io/ember-cli-notifications
[broccoli-sass]: https://www.npmjs.com/package/broccoli-sass
[Font Awesome]: http://fortawesome.github.io/Font-Awesome
