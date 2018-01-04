import { moduleFor, test } from 'ember-qunit';

moduleFor('model:first-last', 'Unit | Model | fullName', {
	unit: true
});

test('check computed property fullName', function(assert) {
  const firstLast= this.subject();
  firstLast.set('firstName','Erik');
  firstLast.set('lastName','Hanchett');
  assert.equal(firstLast.get('fullName'), 'Full Name: Erik wrong');
});
