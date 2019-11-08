import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | authors/create', function(hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function(assert) {
        let controller = this.owner.lookup('controller:authors/create');
        assert.ok(controller);
    });
});