import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
    session: service(),

    username: null,
    password: null,

    actions: {
        authenticate() {
            this.get("session")
                .authenticate(this.get("username"), this.get("password"))
                .then(() => {
                    this.transitionToRoute("students");

                }, err => {
                    alert(`Wrong username or password! ${err.responseText}`);

                });
        }
    }
});
