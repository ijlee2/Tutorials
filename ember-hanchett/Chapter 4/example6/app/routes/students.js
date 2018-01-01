import Ember from 'ember';

export default Ember.Route.extend({
/*	beforeModel(){
		this.transitionTo('teachers');
	},*/
	afterModel() {
		this.transitionTo('teachers');
	},
	model() {
		return [1,2,3,4,5,6,7,8,9];
	}
});
