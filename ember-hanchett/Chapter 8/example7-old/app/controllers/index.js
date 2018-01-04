import Ember from 'ember';

export default Ember.Controller.extend({
	myValue: 'value',
	actions:{
		pressed(value){
			this.set('myValue',value);
		}	
	}
});
