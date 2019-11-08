import Route from '@ember/routing/route';

export default class AuthorsRoute extends Route {
    queryParams = {
        search: {
            refreshModel: true
        }
    };

    model({ search }) {
        if (search) {
            // Build a URL in the form of /authors?filter[query]=Rowling
            return this.store.query('author', {
                filter: {
                    query: search
                }
            });
        }

        return this.store.findAll('author');
    }
}