8.0.0 / 2022-01-28
==================
  * Replace overridable icon paths with overridable icon components #324 from @pichfl
  * BREAKING: Remove obsolete `equals` helper #326 from @pichfl
  * Breaking: Drop support for Node 10 and Modernize syntax #320 from @pichfl
  * add no-deprecations ember-try scenarios #322 from @mansona
  * Fix `no-curly-component-invocation` issues #319 from @Turbo87
  * update lint-to-the-future #318 from @mansona
  * Fix `prettier` issues #315 from @Turbo87
  * Fix `implicit-this` issues #314 from @Turbo87
  * add fail-fast: false for ember-try scenarios #317 from @mansona

7.0.0 / 2021-06-22
==================

  * Relax `ember-get-config` requirement to allow v0.3.x #312 from @Turbo87
  * [BREAKING] Update ember using ember-cli-update and drop support for Node 8, Ember 2.18, and Ember 3.4 #308 from @mansona

6.3.4 / 2021-03-23
==================

  * Move on-modifier from devDependencies to dependencies  #271 from @Shajansheriff
  * Wraps dummy-application interactive config inputs in label tags #293 from @JamesS-M
  * Use `this` in the template #305 from @pichfl
  * Import `htmlSafe` from '@ember/template' rather than '@ember/string' #302 from @gilest

6.3.3 / 2021-03-08
==================

  * Replace TravisCI with GitHub Actions #303 from @Turbo87

6.3.2 / 2020-10-18
==================

  * fix: move auto-chagnelog to devDependencies
  * README: Fix "Service Name" header syntax #294 from @Turbo87
  * fix: avoid overriding globals.clearDuration when it's 0 #292 from @jacobq

6.3.1 / 2020-09-28
==================

  * FIX: Merge pull request #287 from jacobq/remove-getWithDefault [`#286`](https://github.com/mansona/ember-cli-notifications/issues/286)

6.3.0 / 2020-07-23
==================

  * services/notifications: Use new `content` array for each service instance #279 from @Turbo87
  * Add configuration option to exclude all CSS #275 from @pichfl

6.2.0 / 2020-02-11
==================

  * manually running postcss and adding it to vendor #262 from @mansona

6.1.0 / 2020-02-15
==================

  * Fix mouseEnter/Leave deprecations #263 from @Shajansheriff

6.0.0 / 2020-01-09
==================

  * remove support for Ember < 2.18
  * fix issue with clicking close running onClick handler #259 from @mansona

5.1.0 / 2020-01-09
==================

  * update dependencies with ember-cli-update from @mansona

5.0.0 / 2020-01-09
==================
  * renaming service to simply 'notifications'
  * Added support for SVG icons - and removing Font Awesome
  * removing CSS Modules
  * update with ember-cli-update

5.0.0-2 / 2020-01-07
==================

  * Remove syntax error #258 from @cah-danmonroe

5.0.0-0 / 2019-11-12
==================

  * renaming service to simply 'notifications'
  * Added support for SVG icons - and removing Font Awesome
  * removing CSS Modules
  * update with ember-cli-update
