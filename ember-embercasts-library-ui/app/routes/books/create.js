import Route from '@ember/routing/route';

export default class BooksCreateRoute extends Route {
    model() {
        return {
            title: '',
            isbn: '',
            publicationDate: '',
            author: null
        };
    }
}