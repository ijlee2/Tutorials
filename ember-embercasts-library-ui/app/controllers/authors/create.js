import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorsCreateController extends Controller {
    @action
    saveAuthor(formFields) {
        const author = this.store.createRecord('author', formFields);

        author
            .save()
            .then(() => {
                this.transitionToRoute('authors');
            });
    }
}