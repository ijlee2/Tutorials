import Ember from 'ember';

export default Ember.Component.extend({
	   init(){
		   this._super(...arguments);
		   this.setup();
	   },
	   actions: {
		   remove(){
			   this.get('listOfStudents').popObject();
		   },
		   reset(){
			   this.setup();
		   }

	   },
	   setup(){
		   let st = this.set('listOfStudents',[]);
		   st.clear();
		   st.pushObject('Erik');
		   st.pushObject('Bob');
		   st.pushObject('Suze');
	   }


});
