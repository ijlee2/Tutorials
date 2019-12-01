import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('authors', function() {
        this.route('create');
        this.route('details', { path: '/:id' }, function() {
            this.route('new-book');
        });
        this.route('edit', { path: '/:id/edit' });
    });

    this.route('books', function() {
        this.route('create');
        this.route('details', { path: '/:id' });
        this.route('edit', { path: '/:id/edit' });
    });
});

export default Router;