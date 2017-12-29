import Ember from 'ember';

export default Ember.Mixin.create({
    property1: 'This is a mixin property',
    edit: function() {
		console.log('Starting to edit');
		this.set('isEditing', true);
  },
  isEditing: false
});
