'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
  });

  // app.import('bower_components/Semantic/dist/semantic.min.css');
  return app.toTree();
};
