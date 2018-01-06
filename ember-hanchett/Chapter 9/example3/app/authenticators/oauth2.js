import OAuth2PasswordGrantAuthenticator from "ember-simple-auth/authenticators/oauth2-password-grant";
import $ from "jquery";

// Use "Resource Owner Password Credentials Grant Type"
export default OAuth2PasswordGrantAuthenticator.extend({
    makeRequest(url, data) {
        const client_id = "123";
        const client_secret = "secret";

        data.grant_type = "password";

        return $.ajax({
            "url": this.serverTokenEndpoint,
            "type": "POST",
            "data": data,
            "dataType": "json",
            "contentType": "application/x-www-form-urlencoded",
            "crossDomain": true,
            "headers": {
                // btoa encodes a string in base-64
                "Authorization": `Basic ${btoa(client_id + ":" + client_secret)}`
            }
        });
    }
});