import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | books/details', function(hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function(assert) {
        let controller = this.owner.lookup('controller:books/details');
        assert.ok(controller);
    });
});