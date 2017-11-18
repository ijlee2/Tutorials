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
            const email = this.get("emailAddress");

            const newInvitation = this.store.createRecord("invitation", {email});
            newInvitation.save();

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