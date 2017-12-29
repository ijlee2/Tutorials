import Ember from 'ember';

export default Ember.Object.extend({
	firstName: null,
	lastName: null,
	nickName: Ember.computed.oneWay('firstName')

});
