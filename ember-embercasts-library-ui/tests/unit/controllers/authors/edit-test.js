import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | authors/edit', function(hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function(assert) {
        let controller = this.owner.lookup('controller:authors/edit');
        assert.ok(controller);
    });
});