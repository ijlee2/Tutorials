import Ember from 'ember';

export default Ember.Controller.extend({
	authManager: Ember.inject.service('session'),
	actions: {
		logout(){
			this.get('authManager').invalidate();
		}	
	}
});
