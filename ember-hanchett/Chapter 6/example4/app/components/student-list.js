import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		removeComponent(){
			this.get('onRemove')();
		},
	    resetComponent(){
			this.attrs.onReset();
		}
	}
});
