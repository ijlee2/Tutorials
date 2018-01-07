import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		press(){
			this.myLogger.log('Hello World!'); 

		}
	}
});
