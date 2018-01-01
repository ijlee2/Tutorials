import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		action1(){
			alert('Application controller action action1');
		},
	    action2(){
			alert('Application controller action action2');
			return true;
		},
	    action3(val){
			alert(`Value Passed: ${val}`);
		}
	}
});
