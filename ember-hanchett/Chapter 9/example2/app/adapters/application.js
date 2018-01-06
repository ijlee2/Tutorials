import { computed } from "@ember/object";
import { inject as service } from "@ember/service";
import DS from "ember-data";

export default DS.JSONAPIAdapter.extend({
    session: service(),

    namespace: "api",
    
    headers: computed("session.token", function() {
        return {
            "Authorization": `Bearer ${this.get("session.token")}`
        };
    })
});
