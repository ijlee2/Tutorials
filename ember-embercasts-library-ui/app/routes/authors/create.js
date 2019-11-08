import Route from '@ember/routing/route';

export default class AuthorsCreateRoute extends Route {
    model() {
        return {
            firstName: '',
            lastName: ''
        };
    }
}