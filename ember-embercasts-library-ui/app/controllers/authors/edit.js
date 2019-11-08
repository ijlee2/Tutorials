import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorsEditController extends Controller {
    @action
    saveAuthor(formFields) {
        const { firstName, lastName } = formFields;

        this.model.firstName = firstName;
        this.model.lastName = lastName;

        this.model
            .save()
            .then(() => {
                this.transitionToRoute('authors.details', this.model.id);
            });
    }
}