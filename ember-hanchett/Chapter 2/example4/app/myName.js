import Ember from 'ember';

export default Ember.Object.extend({
	name: "Erik Hanchett",
    otherName: Ember.computed.alias('name')

});
