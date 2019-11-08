import Route from '@ember/routing/route';

export default class BooksEditRoute extends Route {
    model({ id }) {
        return this.store.findRecord('book', id);
    }
}