import Authenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
import Ember from 'ember';

export default Authenticator.extend({
	makeRequest(url, data) {

		var client_id = '123';
		var client_secret = 'secret';
		data.grant_type = 'password';

		return Ember.$.ajax({
			url: this.serverTokenEndpoint,
			   type: 'POST',
			   data: data,
			   dataType: 'json',
			   contentType: 'application/x-www-form-urlencoded',
			   crossDomain: true,
			   headers: {
				   Authorization: "Basic " + btoa(client_id + ":" + client_secret)
			   }
		});
	}
});

