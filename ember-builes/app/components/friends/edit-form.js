import Component from "@ember/component";
import { computed } from "@ember/object";
import { isEmpty } from "@ember/utils";

export default Component.extend({
    isValid: computed("model.firstName", "model.lastName", "model.email", "model.twitter", function() {
        return !isEmpty(this.get("model.firstName"))
            && !isEmpty(this.get("model.lastName"))
            && !isEmpty(this.get("model.email"))
            && !isEmpty(this.get("model.twitter"));
    }),

    actions: {
        save() {
            console.log("Called save action in edit-form component");

            if (this.get("isValid")) {
                // Call the save action passed down when rendering the component:
                // action=(action "save")
                this.get("model")
                    .save()
                    .then(friend => {
                        this.set("errorMessage", "");
                        
                        return this.save(friend);

                    }, error => {
                        this.set("errorMessage", "There was something wrong with saving the model.");

                    });

            } else {
                this.set("errorMessage", "Please fill out all fields.");

            }
        },

        cancel() {
            console.log("Called cancel action in edit-form component");

            // Call the cancel action passed down when rendering the component:
            // action=(action "cancel")
            this.cancel();
        }
    }
});
