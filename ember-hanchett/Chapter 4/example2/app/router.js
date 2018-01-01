import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('about', function(){
		this.route('location');
		this.route('job');
	});
	this.route('page-not-found', {path: '/*wildcard' });
});

export default Router;
