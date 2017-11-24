import Controller from "@ember/controller";
import Faker      from "faker";
import RSVP       from "rsvp";

export default Controller.extend({
    "actions": {
        generateLibraries(volume) {
            // Display a spinner
            this.set("generateLibrariesInProgress", true);

            const numLibraries = parseInt(volume);
            const libraries    = [];

            for (let i = 0; i < numLibraries; i++) {
                // Collect all Promises in an array
                libraries.push(this._saveRandomLibrary());
            }

            // Fulfill all Promises before hiding the spinner
            RSVP.all(libraries)
                .then(() => {
                    this.set("generateLibrariesReady", true);
                    this.set("generateLibrariesInProgress", false);

                });
        },

        deleteLibraries() {
            this.set("deleteLibrariesInProgress", true);

            this._destroyAll(this.get("libraries"))
                .then(() => {
                    this.set("deleteLibrariesReady", true);
                    this.set("deleteLibrariesInProgress", false);

                });
        },

        generateBooksAndAuthors(volume) {
            this.set("generateBooksInProgress", true);

            const numBooks         = parseInt(volume);
            const booksWithAuthors = [];

            for (let i = 0; i < numBooks; i++) {
                const books = this._saveRandomAuthor().then(author => this._generateBooks(author));

                booksWithAuthors.push(books);
            }

            RSVP.all(booksWithAuthors)
                .then(() => {
                    this.set("generateBooksReady", true);
                    this.set("generateBooksInProgress", false);

                });
        },

        deleteBooksAndAuthors() {
            this.set("deleteBooksInProgress", true);

            const authors = this.get("authors");
            const books   = this.get("books");

            // Remove authors first, then remove books
            this._destroyAll(authors)
                .then(() => this._destroyAll(books))
                .then(() => {
                    this.set("deleteBooksReady", true);
                    this.set("deleteBooksInProgress", false);

                });
        }
    },


    /************************************************************************

        Private methods

    *************************************************************************/
    _saveRandomLibrary() {
        // Create a library
        const library = this.store.createRecord("library");

        // Create and save fake data (return a Promise)
        return library.randomize().save();
    },

    _saveRandomAuthor() {
        const author = this.store.createRecord("author");

        return author.randomize().save();
    },

    _generateBooks(author) {
        // The author has written 0 - 10 books
        const numBooks = Faker.random.number(10);
        const books    = [];

        for (let i = 0; i < numBooks; i++) {
            // Create a book
            const book = this.store.createRecord("book");

            // A book belongs to a library
            const library = this._selectRandomLibrary();

            const bookPromise = book.randomize(author, library).save()
                .then(() => author.save())
                // Create a guard in case there aren't any libraries
                .then(() => library && library.save());

            books.push(bookPromise);
        }

        // Return a Promise
        return RSVP.all(books);
    },

    _selectRandomLibrary() {
        // Note, libraries is a record in the store and a DS.RecordArray object, which
        // is extended from Ember.ArrayProxy. If we need an element from this list,
        // we cannot just use libraries[0], but instead must use libraries.objectAt(0).
        const libraries    = this.get("libraries");
        const numLibraries = libraries.get("length");

        const index = Faker.random.number(numLibraries - 1);

        return libraries.objectAt(index);
    },

    _destroyAll(records) {
        // destroyRecord is a Promise that is fulfilled when the backend database
        // confirms deletion
        const recordsDestroyed = records.map(item => item.destroyRecord());

        // Wrap all Promises in a Promise
        return RSVP.all(recordsDestroyed);
    }
});