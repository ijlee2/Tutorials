import { moduleFor, test } from 'ember-qunit';

moduleFor('route:tut1', 'Unit | Route | tut1', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
