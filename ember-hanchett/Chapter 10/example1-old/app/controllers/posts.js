import Ember from 'ember';
import cleanURI from '../utils/clean';

export default Ember.Controller.extend({
	actions: {
		edit(){
			this.set('isEditing',true);
		},
	    delete(){
			this.get('model').forEach(model=>{
				model.deleteRecord();
			});
			this.get('model').save();
			this.set('isEditing',false);
			this.transitionToRoute('index');
		},
	   save(){
			this.get('model').forEach(model=>{
				const titleURL = cleanURI(model.get('title'));
				model.set('titleURL',titleURL);
				model.save();
			});
			this.set('isEditing',false);
			this.transitionToRoute('index');
	   }
	}
});
