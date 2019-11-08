import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | books/create', function(hooks) {
    setupTest(hooks);

    test('it exists', function(assert) {
        let route = this.owner.lookup('route:books/create');
        assert.ok(route);
    });
});