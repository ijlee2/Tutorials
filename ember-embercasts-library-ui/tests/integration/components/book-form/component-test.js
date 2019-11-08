import { click, fillIn, render } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { selectChoose, selectSearch } from 'ember-power-select/test-support';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | book-form', function(hooks) {
    setupRenderingTest(hooks);
    setupMirage(hooks);

    hooks.beforeEach(function() {
        this.server.create('author', {
            firstName: 'J.K.',
            lastName: 'Rowling'
        });

        this.server.create('author', {
            firstName: 'Ernest',
            lastName: 'Hemingway'
        });

        this.server.create('author', {
            firstName: 'Virginia',
            lastName: 'Woolf'
        });
    });

    test('should render', async function(assert) {
        this.book = {
            title: 'Harry Potter and the Philosopher\'s Stone',
            isbn: '0747532699',
            publicationDate: '1997-06-26',
            author: {
                firstName: 'J.K.',
                lastName: 'Rowling'
            }
        };

        await render(hbs`<BookForm
            @book={{this.book}}
        />`);

        assert.ok(true);
    });

    test('should allow the user to create an author', async function(assert) {
        assert.expect(5);

        this.book = {
            title: '',
            isbn: '',
            publicationDate: '',
            author: null
        };

        this.saveBook = (formFields) => {
            const { title, isbn, publicationDate, author } = formFields;

            assert.strictEqual(title, 'Harry Potter and the Philosopher\'s Stone');
            assert.strictEqual(isbn, '0747532699');
            assert.strictEqual(publicationDate, '1997-06-26');
            assert.strictEqual(author.firstName, 'J.K.');
            assert.strictEqual(author.lastName, 'Rowling');
        };

        await render(hbs`<BookForm
            @book={{this.book}}
            @onSubmit={{this.saveBook}}
        />`);

        // Fill out basic information
        await fillIn('[data-test-field="Title"]', 'Harry Potter and the Philosopher\'s Stone');
        await fillIn('[data-test-field="ISBN"]', '0747532699');
        await fillIn('[data-test-field="Publication Date"]', '1997-06-26');

        // Select author
        await selectSearch('.ember-power-select-trigger', 'ing');
        await selectChoose('.ember-power-select-trigger', '.ember-power-select-option', 0);

        // Save form
        await click('[data-test-button="Save"]');
    });
});