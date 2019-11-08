import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BooksDetailsController extends Controller {
    @action
    deleteBook(book) {
        book
            .destroyRecord()
            .then(() => {
                this.transitionToRoute('books.index');
            });
    }
}