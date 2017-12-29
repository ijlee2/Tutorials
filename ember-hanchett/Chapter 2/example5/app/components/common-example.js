import Ember from 'ember';
import common from '../mixins/common';

export default Ember.Component.extend(common,{
	compprop: 'This is a component property',
	actions: {
		pressed: function(){
			this.edit();
		}
	}
});
