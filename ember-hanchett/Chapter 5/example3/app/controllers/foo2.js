import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		enter(){
			this.transitionToRoute('foo1');
		}
	}
});
