import Ember from 'ember';

export default Ember.Object.extend({
	homeroom: Ember.computed.alias('teacher.homeroom'),
	age: "",
	grade: "",
	teacher: null

});
