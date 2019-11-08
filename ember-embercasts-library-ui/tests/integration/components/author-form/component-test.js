import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | author-form', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        this.author = {
            firstName: 'J.K.',
            lastName: 'Rowling'
        };

        await render(hbs`
            <AuthorForm
                @author={{this.author}}
            />
        `);

        assert.ok(true);
    });
});