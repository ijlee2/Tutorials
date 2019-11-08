import Route from '@ember/routing/route';

export default class AuthorsDetailsNewBookRoute extends Route {
    model() {
        const author = this.modelFor('authors.details');

        return {
            author,

            book: {
                title: '',
                isbn: '',
                publicationDate: '',
                author
            }
        };
    }
}