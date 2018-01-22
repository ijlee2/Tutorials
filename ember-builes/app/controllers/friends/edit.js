import Controller from "@ember/controller";

export default Controller.extend({
    actions: {
        save(model) {
            console.log("Called save action in edit-form controller");

            this.transitionToRoute("friends.show", model);
        },

        cancel() {
            console.log("Called cancel action in edit-form controller");

            this.get("model").rollbackAttributes();

            this.transitionToRoute("friends");
        }
    }
});
