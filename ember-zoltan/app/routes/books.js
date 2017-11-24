import Route from "@ember/routing/route";
import RSVP  from "rsvp";

export default Route.extend({
    model() {
        // Make promises to retrieve these models
        return RSVP.hash({
            "books"    : this.store.findAll("book"),
            "authors"  : this.store.findAll("author"),
            "libraries": this.store.findAll("library")
        });
    },

    setupController(controller, model) {
        this._super(controller, model.books);

        controller.set("authors", model.authors);
        controller.set("libraries", model.libraries);
    },

    "actions": {
        editAuthor(book) {
            book.set("isEditingAuthor", true);
        },

        cancelEditAuthor(book) {
            book.rollbackAttributes();
            book.set("isEditingAuthor", false);
        },

        saveAuthor(author, book) {
            // Manually remove existing relation (Firebase adapter was buggy when the tutorial was written)
            book
                .get("author")
                .then(authorOld => {
                    authorOld
                        .get("books")
                        .then(booksOld => {
                            booksOld.removeObject(book);
                            authorOld.save();

                        });

                });

            // Set a new relation
            book.set("author", author);
            book.save().then(() => author.save());

            book.set("isEditingAuthor", false);
        },

        editTitle(book) {
            book.set("isEditingTitle", true);
        },

        cancelEditTitle(book) {
            book.rollbackAttributes();
            book.set("isEditingTitle", false);
        },

        saveTitle(book) {
            if (book.get("isTitleNotValid")) {
                return;
            }

            book.set("isEditingTitle", false);
            book.save();
        },

        editLibrary(book) {
            book.set("isEditingLibrary", true);
        },

        cancelEditLibrary(book) {
            book.rollbackAttributes();
            book.set("isEditingLibrary", false);
        },

        saveLibrary(library, book) {
            // Manually remove existing relation (Firebase adapter was buggy when the tutorial was written)
            book
                .get("library")
                .then(libraryOld => {
                    libraryOld
                        .get("books")
                        .then(booksOld => {
                            booksOld.removeObject(book);
                            libraryOld.save();

                        });

                });

            // Set a new relation
            book.set("library", library);
            book.save().then(() => library.save());

            book.set("isEditingLibrary", false);
        }
    }
});