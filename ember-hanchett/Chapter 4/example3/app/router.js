import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('about', function(){
		this.route('location', {path: '/about/:location_id'});
	});
});

export default Router;
