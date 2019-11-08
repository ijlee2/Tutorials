import Route from '@ember/routing/route';

export default class AuthorsDetailsRoute extends Route {
    model({ id }) {
       return this.store.findRecord('author', id);
    }
}