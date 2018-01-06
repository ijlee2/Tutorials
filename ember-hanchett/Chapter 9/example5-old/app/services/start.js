import Ember from 'ember';

export default Ember.Service.extend({
	isOn: false,
	importantInfo(){
		return "Important Info is " + this.get('isOn');
	}
});
