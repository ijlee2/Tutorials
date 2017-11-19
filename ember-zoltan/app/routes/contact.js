import Route from "@ember/routing/route";

export default Route.extend({
    model() {
        return this.store.createRecord("contact");
    },

    "actions": {
        saveMessage(message) {
            message.save().then(() => this.controller.set("response", true));
        },

        willTransition() {
            this.controller.get("model").rollbackAttributes();
            this.controller.set("response", false);
        }
    }
});