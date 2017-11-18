import Ember      from "ember";
import Controller from "@ember/controller";

export default Controller.extend({
    "email": "",

    "isEmailValid"    : Ember.computed.match("email", /^.+@.+\.(com|net|edu)+$/),
    "isSubmitDisabled": Ember.computed.not("isEmailValid"),

    "actions": {
        saveInvitation() {
            this.set("responseMessage", `Thanks, we saved your email address: ${this.get("email")}!`);

            // Reset the input field
            this.set("email", "");
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