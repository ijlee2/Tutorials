import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | authors', function(hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function(assert) {
        let controller = this.owner.lookup('controller:authors');
        assert.ok(controller);
    });
});