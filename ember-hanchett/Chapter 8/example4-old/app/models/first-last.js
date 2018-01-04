
import Ember from 'ember';

export default Ember.Object.extend({
  firstName: 'John',
  lastName: 'Smith',
  fullName: Ember.computed('firstName', 'lastName', function() {
	  const firstName = this.get('firstName');
	  const lastName= this.get('lastName');
	  return `Full Name: ${firstName} ${lastName}`;
    })
});
