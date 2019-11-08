import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | authors/details/new-book', function(hooks) {
    setupTest(hooks);

    test('it exists', function(assert) {
        let route = this.owner.lookup('route:authors/details/new-book');
        assert.ok(route);
    });
});