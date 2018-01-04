import { moduleForModel, test } from 'ember-qunit';

moduleForModel('student', 'Unit | Model | student', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});

test('Test model data', function(assert) {
  assert.expect(2);
  let model = this.subject({firstName: 'Erik', lastName: 'Hanchett'});
  assert.equal(model.get('firstName'), 'Erik', 'first Name is Erik');
  assert.equal(model.get('lastName'), 'Hanchett', 'last Name is Erik');
});
