import Ember from 'ember';

export default Ember.Component.extend({
	textInfo: 'Hello World',
    attributeBindings: ['style'],
    style: Ember.computed('size',function() {
		   const size = this.get('size');
		   return new Ember.Handlebars.SafeString("font-size: "+ size);
    }),
	actions: {
		updateText(){
			this.set('textInfo','Hi');
		}
	}

});
