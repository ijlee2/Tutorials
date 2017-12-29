import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import Light from './Light';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

const bulb = Light.create({age: 32});
console.log(bulb.get('description')); //The yellow light is set to false
bulb.set('isOn', true);
console.log(bulb.get('description')); //The yellow light is set to true

console.log(bulb.get('fullDescription')); //The yellow light is set to true and the age is 32
console.log(bulb.get('aliasDescription')); //The yellow light is set to true and the age is 32.

export default App;
