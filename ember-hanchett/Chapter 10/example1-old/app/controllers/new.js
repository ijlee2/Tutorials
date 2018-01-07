import Ember from 'ember';
import cleanURI from '../utils/clean';

export default Ember.Controller.extend({
	actions: {
		save(){
			const titleURL= cleanURI(this.get('title'));
			const post = this.store.createRecord('post',{
				title: this.get('title'),
				body: this.get('body'),
				author: 'test',
				titleURL:titleURL 
			});
			post.save();
			this.set('title','');
			this.set('body','');
			this.transitionToRoute('index');
		}
	}
});
