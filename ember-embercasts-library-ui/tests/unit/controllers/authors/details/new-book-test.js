import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | authors/details/new-book', function(hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function(assert) {
        let controller = this.owner.lookup('controller:authors/details/new-book');
        assert.ok(controller);
    });
});