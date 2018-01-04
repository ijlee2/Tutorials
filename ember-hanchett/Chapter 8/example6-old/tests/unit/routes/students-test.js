import { moduleFor, test } from 'ember-qunit';

moduleFor('route:students', 'Unit | Route | students', {
  // Specify the other units that are required for this test.
});

test('check prop and route exists', function(assert) {
  let route = this.subject();
  assert.expect(3);
  assert.equal(route.get('someText'),'someText');
  route.set('someText','otherText');
  assert.equal(route.get('someText'),'otherText');
  assert.ok(route);
});
