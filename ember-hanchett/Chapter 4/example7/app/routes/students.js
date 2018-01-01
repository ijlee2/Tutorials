import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return new Ember.RSVP.Promise(function (resolve, reject) {
		Ember.run.later((function() {
			resolve( [1,2,3,4,5,6,7,8,9]);	
		}), 2000);
	   });
	},
	actions: {
		loading(transition, originRoute) {
			alert('Sorry this page is taking so long to load!');
			this.transitionTo('application');
		}
	}
});
