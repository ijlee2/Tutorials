import Route from '@ember/routing/route';

export default class BooksRoute extends Route {
    queryParams = {
        search: {
            refreshModel: true
        }
    };

    model({ search }) {
        if (search) {
            // Build a URL in the form of /books?filter[query]=Harry
            return this.store.query('book', {
                filter: {
                    query: search
                }
            });
        }

        return this.store.findAll('book');
    }
}