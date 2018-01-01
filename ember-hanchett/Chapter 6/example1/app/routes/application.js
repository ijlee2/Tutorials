import Ember from 'ember';

export default Ember.Route.extend({
	model() {
//		return Ember.RSVP.hash({
//			comp: ['student-info'],
//		    students: ['bob','mary','jake','Jill']	   
//		});
		return ['student-info'];
	}
});
