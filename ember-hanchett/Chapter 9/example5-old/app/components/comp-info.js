import Ember from 'ember';

export default Ember.Component.extend({
	//start: Ember.inject.service(),
	message: null,
	actions: {
		   pressMe() {
			   this.start.toggleProperty('isOn');
			   this.set('message',this.start.importantInfo());
			   console.log(this.start.isOn);
		   }
	   }

});
