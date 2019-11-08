import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorsDetailsController extends Controller {
    @action
    deleteAuthor(author) {
        author
            .destroyRecord()
            .then(() => {
                this.transitionToRoute('authors.index');
            });
    }
}