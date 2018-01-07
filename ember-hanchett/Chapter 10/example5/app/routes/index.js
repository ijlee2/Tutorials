import Route from "@ember/routing/route";
import fetch from "ember-fetch/ajax";

export default Route.extend({
    model() {
        return fetch("https://api.github.com/users/ijlee2")
            .then(response => {
                return response;
            });
    }
});
