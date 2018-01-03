'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    
    // Turn off minifying CSS and JS files during development stage
    minifyCSS: {
      enabled: false
    },
    minifyJS: {
      enabled: false
    },

    // Turn off fingerprinting, which appends an MD5 checksum at the end of
    // file names for JS, CSS, PNG, JPG, GIF, and MAP assets
    fingerprint: {
      enabled: false,
      // Prepend a domain to all static files
      prepend: 'http://www.example.com',
      // Specify which files to exclude from fingerprint
      exclude: ['fonts/12424'],
      ignore: ['fonts/12424'],
      // Specify which file types to include for fingerprint
      extension: ['r3', 'html'],
      // Replace file extension
      replaceExtensions: ['html', 'htm']
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
