import Ember from 'ember';

export default Ember.Route.extend({
	model(param) {
		return this.store.findRecord('student',param.student_id);
	}	
});
