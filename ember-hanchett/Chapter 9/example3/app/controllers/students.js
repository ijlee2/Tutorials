import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
    auth: service("session"),

    actions: {
        logout() {
            this.get("auth").invalidate();
        }
    }
});
