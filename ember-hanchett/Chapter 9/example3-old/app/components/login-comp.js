import Ember from 'ember';

export default Ember.Component.extend({

	auth: Ember.inject.service('session'),
	login: null,
	password: null,
	   actions: {
		   authenticate() {
			   this.get('auth').authenticate('authenticator:oauth2-custom', this.get('login'), this.get('password')).then(() => {
				   alert('Thanks for logging in!');
				   this.get('transition')();
			   }, () => {
				   alert('Wrong user name or password!');
			   });
		   }
	   }

});
