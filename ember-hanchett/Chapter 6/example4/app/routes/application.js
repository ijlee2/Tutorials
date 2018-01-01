import Ember from 'ember';

export default Ember.Route.extend({
	listOfStudents: [],
	beforeModel(){
		this.reset();
	},
	model(){

		return this.get('listOfStudents');
	},
	reset(){
		let st = this.get('listOfStudents');
		st.clear();
		st.pushObject('Tiffany');
		st.pushObject('Zack');
		st.pushObject('George');
	},
	actions: {
		removeRoute(){
			this.get('listOfStudents').popObject();
		},
	   resetRoute(){
		   this.reset();
	   }
	}
});
