import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BooksCreateController extends Controller {
    @action
    saveBook(formFields) {
        const book = this.store.createRecord('book', formFields);

        book
            .save()
            .then(() => {
                this.transitionToRoute('books');
            });
    }
}