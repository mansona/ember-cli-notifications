### 3.0.1

* [#67](https://github.com/Blooie/ember-cli-notifications/pull/67) [BUGFIX] Fixing asset issues with demo/dummy app.
* [#67](https://github.com/Blooie/ember-cli-notifications/pull/67) [ENHANCEMENT] Always default to Font Awesome icons, unless Bootstrap specified.
* [#67](https://github.com/Blooie/ember-cli-notifications/pull/67) [ENHANCEMENT] Bumping ember-cli-sass.

### 3.0.0

* [#64](https://github.com/Blooie/ember-cli-notifications/pull/64) [ENHANCEMENT] Using ES6 syntax.
* [#65](https://github.com/Blooie/ember-cli-notifications/pull/65) [ENHANCEMENT] Pause auto clearing notifications on hover.
* [#66](https://github.com/Blooie/ember-cli-notifications/pull/66) [ENHANCEMENT] New component helper for simplifying installs.

### 2.1.4

* [#63](https://github.com/Blooie/ember-cli-notifications/pull/63) [BUGFIX] Adding close icon for when Bootstrap theme used.

### 2.1.3

* [#59](https://github.com/Blooie/ember-cli-notifications/pull/56) [BUGFIX] Fixing initializer deprecation.

### 2.1.2

* [#56](https://github.com/Blooie/ember-cli-notifications/pull/56) [ENHANCEMENT] Allow injection into services.

### 2.1.1

* [#53](https://github.com/Blooie/ember-cli-notifications/pull/53) [ENHANCEMENT] Make inclusion of the font-awesome assets in project configurable.

### 2.1.0

* [#48](https://github.com/Blooie/ember-cli-notifications/pull/48) [ENHANCEMENT] Set global clear duration for all notification messages.
* [#50](https://github.com/Blooie/ember-cli-notifications/pull/50) [ENHANCEMENT] Allow use of Bootstrap icons in place of Font Awesome.

1.3.1 / 2015-07-07
==================

  * Revert "Merge pull request #42 from Blooie/better-css"
  * Undo SemVer breaking change
  * Merge pull request #44 from briancollins/master
  * Replace bind-attr with new handlebars attribute syntax

### 1.3.0

* [#42](https://github.com/Blooie/ember-cli-notifications/pull/42) [ENHANCEMENT] CSS improvements, including less generic class names.

### 1.2.3

* [#38](https://github.com/Blooie/ember-cli-notifications/pull/38) [BUGFIX] Fixing Sass build errors.

### 1.2.2

* [#30](https://github.com/Blooie/ember-cli-notifications/pull/30) [ENHANCEMENT] Added a `clearAll` helper to remove all active notifications.

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
