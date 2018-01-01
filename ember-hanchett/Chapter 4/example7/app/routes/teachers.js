import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return new Ember.RSVP.Promise(function (resolve, reject) {
			reject("error");	
	   });
	},
	actions: {
		error(error, transition) {
			alert('Sorry this page is taking so long to load!');
			this.transitionTo('application');
		}
	}
});
