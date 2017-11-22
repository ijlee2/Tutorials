import Route from "@ember/routing/route";

export default Route.extend({
    model() {
        return this.store.createRecord("invitation");
    },

    "actions": {
        saveInvitation(invitation) {
            invitation
                .save()
                .then(response => {
                    this.controller.set("response", true);
                });
        },

        willTransition() {
            this.controller.get("model").rollbackAttributes();
            this.controller.set("response", false);
        }
    }
});