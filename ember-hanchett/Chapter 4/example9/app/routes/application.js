import Ember from 'ember';

export default Ember.Route.extend({
	model() {
//		return Ember.RSVP.Promise.reject('error');
		return  new Ember.RSVP.Promise(function(resolve,reject) {
//				resolve({message: 'Resolved'});
				reject('error');
		}).then(null, function() {
			return {message: 'Returned from rejection'};
		});
	},
	setupController(controller, model){
		this._super(controller, model);
		console.log(model.message);
	},
	actions: {
		error(reason){
			console.log(reason);
		}
	}

});
