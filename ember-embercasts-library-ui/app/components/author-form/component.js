import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class AuthorFormComponent extends Component {
    constructor() {
        super(...arguments);

        const { firstName, lastName } = this.args.author;

        this.firstName = firstName;
        this.lastName = lastName;
    }

    @action
    submitChanges(event) {
        event.preventDefault();

        this.args.onSubmit({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }
}