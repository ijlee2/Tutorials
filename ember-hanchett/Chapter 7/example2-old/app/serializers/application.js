import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	//primaryKey: '_id'
	keyForAttribute(attr){
		return Ember.String.decamelize(attr);
	}
});
