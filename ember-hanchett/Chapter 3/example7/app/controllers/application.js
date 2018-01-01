import Ember from 'ember';

export default Ember.Controller.extend({
	helloText: 'Hello World',
	isChecked: true,
	actions: {
		pressed(){
			console.log('pressed');
		}
	}

});
