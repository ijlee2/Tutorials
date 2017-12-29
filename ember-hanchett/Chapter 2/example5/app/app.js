import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import common from './mixins/common'; 

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

const obj = Ember.Object.extend(common,{
  objprop: 'This is an Ember object Property'
});

const object = obj.create();

console.log(object.get('objprop'));
console.log(object.get('property1'));
console.log(object.get('isEditing'));
object.edit();
console.log(object.get('isEditing'));

export default App;
