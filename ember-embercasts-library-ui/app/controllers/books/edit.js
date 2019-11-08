import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BooksEditController extends Controller {
    @action
    saveBook(formFields) {
        const { title, isbn, publicationDate, author } = formFields;

        this.model.title = title;
        this.model.isbn = isbn;
        this.model.publicationDate = publicationDate;
        this.model.author = author;

        this.model
            .save()
            .then(() => {
                this.transitionToRoute('books.details', this.model.id);
            });
    }
}