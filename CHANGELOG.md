# Changelog for ember-cli-notifications

### 1.2.1

* [#28](https://github.com/Blooie/ember-cli-notifications/pull/28) [BUGFIX] Added prefixed animation properties to relevant selectors and removed autoprefixer dependency.

### 1.2.0

* [#27](https://github.com/Blooie/ember-cli-notifications/pull/27) [ENHANCEMENT] Removing dependency for broccoli-sass in consuming application.

### 1.1.4

* [#12](https://github.com/Blooie/ember-cli-notifications/pull/12) [ENHANCEMENT] Using different glyph for error messages to prevent conflicts with dismiss button.
* [#19](https://github.com/Blooie/ember-cli-notifications/pull/19) [ENHANCEMENT] Prevent the dismiss button from being hidden on auto clearing messages.
* [#21](https://github.com/Blooie/ember-cli-notifications/pull/21) [DOCS] Added npm package badge and link to README.
* [#25](https://github.com/Blooie/ember-cli-notifications/pull/25) [BUGFIX] Fixing instances where the message animations wouldn't trigger.

### 1.1.3

* [#13](https://github.com/Blooie/ember-cli-notifications/pull/13), [#16](https://github.com/Blooie/ember-cli-notifications/pull/16) [BUGFIX] Fixing the use of a deprecated implementation of `{{each}}`.
* [#14](https://github.com/Blooie/ember-cli-notifications/pull/14) [ENHANCEMENT] Import of Font Awesome is now set by consuming application config. See [documentation](https://github.com/Blooie/ember-cli-notifications/blob/master/README.md#font-awesome).

### 1.1.2

* [#9](https://github.com/Blooie/ember-cli-notifications/pull/9) [BUGFIX] Fixed an interpolated variable issue that prevented CSS from compiling correctly in some instances.
* [#10](https://github.com/Blooie/ember-cli-notifications/pull/10) [DOCS] Added the required `.notifications-container` for templating to the README.

### 1.1.1

* [#5](https://github.com/Blooie/ember-cli-notifications/pull/5) [FEATURE] Added autoprefixer to build.
* [#6](https://github.com/Blooie/ember-cli-notifications/pull/6) [BUGFIX] Using Ember string to format inline styling.

### 1.1.0

* [#4](https://github.com/Blooie/ember-cli-notifications/pull/4) [FEATURE] Initial implementation of a visual indicator for auto clearing messages.

### 1.0.2

* [#1](https://github.com/Blooie/ember-cli-notifications/pull/1) [BUGFIX] Bower dependencies are now correctly installed when using `ember install:addon ember-cli-notifications`.
