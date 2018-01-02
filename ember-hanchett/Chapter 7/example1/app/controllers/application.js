import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		delete(book){
			book.deleteRecord();
			console.log(book.get('isDeleted'));
			book.save();
		}
	}
});
