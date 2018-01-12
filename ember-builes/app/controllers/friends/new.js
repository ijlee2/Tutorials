import Controller from "@ember/controller";

export default Controller.extend({
    actions: {
        save(model) {
            console.log("Called save action in edit-form controller");
        },

        cancel() {
            console.log("Called cancel action in edit-form controller");
        }
    }
});
