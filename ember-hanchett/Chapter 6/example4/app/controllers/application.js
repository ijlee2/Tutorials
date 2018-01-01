import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		removeController(){
			this.send('removeRoute');
		},
	    resetController(){
			this.send('resetRoute');
		}
	}
});
