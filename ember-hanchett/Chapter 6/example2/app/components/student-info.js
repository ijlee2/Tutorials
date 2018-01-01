import Ember from 'ember';

const {$}=  Ember
export default Ember.Component.extend({
	  click() {
			$('html').fadeToggle( 'slow', 'linear');
			$('html').delay(250).fadeIn(); 
	    }
});
