import Ember from 'ember';

export default Ember.Component.extend({
	books: Ember.A([{name: 'Moby Dick'}]),
	actions: {
		add(val) {
			this.get('books').addObject({name:val});
		}
	}
});
