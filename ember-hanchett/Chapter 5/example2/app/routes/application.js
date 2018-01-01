import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		enter(){
			alert('Application route action enter!');
		},
	    action2(){
			alert('Application route action action2!');
		}
	}
});
