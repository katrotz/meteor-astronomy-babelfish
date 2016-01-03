Package.describe({
  name: 'katrotz:astronomy-babelfish',
  version: '0.0.1',
  summary: 'Translation module for meteor astronomy',
  git: 'git@github.com:katrotz/meteor-astronomy-babelfish.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('jagi:astronomy');
  api.addFiles('lib/modules/events/global.js');
  api.addFiles('lib/modules/events/before_init.js');
  api.addFiles('lib/modules/events/before_change.js');
  api.addFiles('lib/modules/events/after_set.js');
  api.addFiles('lib/modules/methods/global.js');
  api.addFiles('lib/modules/methods/translate.js');
  api.addFiles('lib/modules/methods/locales.js');
  api.addFiles('lib/modules/methods/fields.js');
  api.addFiles('lib/modules/methods/get.js');
  api.addFiles('lib/modules/fields/types/babelfish.js');
  api.addFiles('lib/modules/behaviors/babelfish.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('katrotz:meteor-astronomy-babelfish');
  api.addFiles('tests/meteor-astronomy-babelfish-tests.js');
});
