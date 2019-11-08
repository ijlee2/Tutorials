// Use esm so that we can use ECMA import/export statements
// in other files. Pass in the current module to get a new
// version of require that supports import and export.
require = require('esm')(module);
require('./main');