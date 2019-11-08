import Route from '@ember/routing/route';

export default class AuthorsEditRoute extends Route {
    model({ id }) {
       return this.store.findRecord('author', id);
    }
}