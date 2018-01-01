import Ember from 'ember';

export default Ember.Controller.extend({
	foo1Controller:Ember.inject.controller('foo1'),
	foo1: Ember.computed.reads('foo1Controller.model')
});
