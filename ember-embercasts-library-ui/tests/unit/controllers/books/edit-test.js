import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | books/edit', function(hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function(assert) {
        let controller = this.owner.lookup('controller:books/edit');
        assert.ok(controller);
    });
});