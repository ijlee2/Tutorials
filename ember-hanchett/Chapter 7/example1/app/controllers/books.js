import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		updateText(){
			let book = this.get('model');
			book.set('year',new Date(book.get('year')));
			book.save();
			this.transitionToRoute('application');
		},
		cancel() {
			return true;
		}
	}
});
