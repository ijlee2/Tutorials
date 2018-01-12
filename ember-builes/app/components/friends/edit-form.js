import Component from "@ember/component";

export default Component.extend({
    actions: {
        save() {
            console.log("Called save action in edit-form component");

            // Call the save action passed down when rendering the component:
            // action=(action "save")
            this.save(this.get("model"));
        },

        cancel() {
            console.log("Called cancel action in edit-form component");

            // Call the cancel action passed down when rendering the component:
            // action=(action "cancel")
            this.cancel();
        }
    }
});
