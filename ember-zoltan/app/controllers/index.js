import Ember      from "ember";
import Controller from "@ember/controller";

export default Controller.extend({
    "emailAddress": "",

    "isValid": Ember.computed.match("emailAddress", /^.+@.+\.(com|net|edu)+$/),

    "isDisabled": Ember.computed.not("isValid"),

    "actions": {
        saveInvitation() {
            this.set("responseMessage", `Thanks! We saved your email address: ${this.get("emailAddress")}`);

            // Reset the input field
            this.set("emailAddress", "");
        }
    }

    // Create computed properties
    /*
    "actualEmailAddress": Ember.computed("emailAddress", function() {
        console.log("actualEmailAddress function is called: ", this.get("emailAddress"));

    }),

    "emailAddressChanged": Ember.observer("emailAddress", function() {
        console.log("observer is called: ", this.get("emailAddress"));

    })
    */
});