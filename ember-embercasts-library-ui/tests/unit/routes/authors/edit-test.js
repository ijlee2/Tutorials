import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | authors/edit', function(hooks) {
    setupTest(hooks);

    test('it exists', function(assert) {
        let route = this.owner.lookup('route:authors/edit');
        assert.ok(route);
    });
});