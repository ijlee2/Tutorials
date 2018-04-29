import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('restaurants', {path: '/'}, function() {
        this.route('detail', {path: '/detail/:id'});
    });
});

export default Router;