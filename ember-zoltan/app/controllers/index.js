import Ember      from "ember";
import Controller from "@ember/controller";

export default Controller.extend({
    "header"  : "Coming Soon!",
    "response": "",
    "email"   : "",

    "isEmailValid"    : Ember.computed.match("email", /^.+@.+\.(com|net|edu)+$/),
    "isSubmitDisabled": Ember.computed.not("isEmailValid"),

    "actions": {
        saveInvitation() {
            const email = this.get("email");

            const newInvitation = this.store.createRecord("invitation", {email});

            newInvitation
                .save()
                .then(response => {
                    this.set("response", `Thanks, we saved your email address with the following id: ${response.get("id")}.`);

                    // Reset the input field
                    this.set("email", "");

                });

        }
    }

    // Create computed properties
    /*
    "actualemail": Ember.computed("email", function() {
        console.log("actualemail function is called: ", this.get("email"));

    }),

    "emailChanged": Ember.observer("email", function() {
        console.log("observer is called: ", this.get("email"));

    })
    */
});