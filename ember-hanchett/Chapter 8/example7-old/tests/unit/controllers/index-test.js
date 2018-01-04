import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:index', 'Unit | Controller | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('check property', function(assert) {
  assert.expect(2);
  let controller = this.subject();
  assert.equal(controller.get('myValue'),'value');
  controller.send('pressed','newValue');
  assert.equal(controller.get('myValue'),'newValue');
});
