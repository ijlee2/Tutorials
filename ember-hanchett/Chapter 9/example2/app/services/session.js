import { run } from "@ember/runloop";
import Service from "@ember/service";
import $ from "jquery";

export default Service.extend({
    token: null,

    authenticate(username, password) {
        return $.ajax({
            "method": "POST",
            "url"   : "/token",
            "data"  : {username, password}
        }).then(info => {
            // Wrap with a run to handle "Don't use jQuery without Ember Run Loop" error
            run(() => {
                this.set("token", info.access_token);
            });
            
        });
    }
});
