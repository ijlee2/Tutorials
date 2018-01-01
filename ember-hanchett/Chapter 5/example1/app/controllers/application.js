import Ember from 'ember';

export default Ember.Controller.extend({
	prop2: 'test',
	prop3: true,
	actions: {
		enter(val){
			alert(this.get('prop1'));
			alert(this.getProperties('prop1','prop2').prop1);
			alert(val);
			this.toggleProperty('prop3');
		}
	}
});
