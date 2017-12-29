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
var bulb = Light.create({age: 22});
bulb.set('isOn',true); //console logs isOn value changed 

//mutiple values being changed
Light.reopen({  
isAnythingChanged: Ember.observer('isOn','color',function() {
    console.log('isOn or color value changed');
  })
});

var bulb = Light.create({age: 22});
bulb.set('isOn',true); // console logs isOn or color value changed
bulb.set('color','blue'); // console logs isOn or color value changed

//possible syncronous issues
Light.reopen({
	checkIsOn: Ember.observer('isOn', function() {
      console.log(this.get('fullDescription'));
    })
});

var bulb = Light.create({age: 22});
bulb.set('isOn', true);

//Ember Run once example
Light.reopen({
	checkIsOn: Ember.observer('isOn','color', function() {
      Ember.run.once(this,'checkChanged');
    }),
    checkChanged: Ember.observer('description',function() {
      console.log(this.get('description'));
    })
});
var bulb = Light.create({age: 22});
bulb.set('isOn', true);
bulb.set('color', 'blue'); 


export default App;
