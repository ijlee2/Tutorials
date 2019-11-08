import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorsDetailsNewBookController extends Controller {
    @action
    hideModal() {
        this.transitionToRoute('authors.details', this.model.author.id);
    }

    @action
    saveBook(event) {
        event.preventDefault();

        const book = this.store.createRecord('book', this.model.book);

        book
            .save()
            .then(() => {
                this.transitionToRoute('authors.details', this.model.author.id);
            });
    }
}