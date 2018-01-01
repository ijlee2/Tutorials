import Ember from 'ember';

export default Ember.Route.extend({
	 resetController: function (controller, isExiting, transition) {
		this._super(controller,isExiting,transition);
		if (isExiting) {
		  controller.set('student', null);
		}
	  }
});
