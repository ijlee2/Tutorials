/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
	  // Add options here
      minifyCSS: {
            enabled: false
      },
      minifyJS: {
            enabled: false
      },
      fingerprint: {
           enabled: false,
           prepend: 'http://www.example.com',
           exclude: ['fonts/12424'],
           ignore: ['fonts/12424'],
           extension: ['r3','html'],
           replaceExtensions: ['html','htm']
      }




  });

  app.import('bower_components/moment/moment.js');
app.import('bower_components/ic-ajax/dist/named-amd/main.js', {
   exports: {
     'ic-ajax': [
       'default',
       'defineFixture',
       'lookupFixture',
       'raw',
       'request',
     ]
   }
 });



  return app.toTree();
};
