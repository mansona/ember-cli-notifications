# ember-cli-notifications
[![Build Status](https://travis-ci.org/Blooie/ember-cli-notifications.svg)](https://travis-ci.org/Blooie/ember-cli-notifications)

An [Ember CLI] addon that adds [Atom] inspired notification messages to your app.

Check out the [demo].

![ember-cli-notifications](https://s3.amazonaws.com/f.cl.ly/items/1F1W2M10063i3w032w0D/ember-cli-notifications.png)

## Installation

```shell
ember install:addon ember-cli-notifications
```

### Dependencies

This addon requires [broccoli-sass] to compile CSS for the included message themes.

If not already a part of your project, install using `ember install:npm broccoli-sass` in your project directory.

## Usage

From within your controller or route.

```js
actions: {
    saveOptions: function() {
        this.notifications.addNotification({
            message: 'Saved successfully!',
            type: 'success'
        });
    }
}
```
```js
actions: {
    saveOptions: function() {
        this.get('model').save()
        .then(function(){
            this.notifications.addNotification({
                message: 'Successfully saved your settings',
                type: 'success',
                autoClear: true
            });
        }.bind(this),
        .catch(function(err) {
            this.notifications.addNotification({
                message: 'Something went wrong'
                type: 'error'
            });
        }.bind(this));
    }
}
```

### Template

Include this snippet in your Handlebars template to display the notifications.

```hbs
<div class="notifications-container">
    {{#each notification in notifications}}
        {{notification-message notification=notification}}
    {{/each}}
</div>
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
