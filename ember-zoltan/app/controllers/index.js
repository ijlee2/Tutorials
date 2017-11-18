import Ember      from "ember";
import Controller from "@ember/controller";

export default Controller.extend({
    "emailAddress": "",

    "isDisabled": Ember.computed.empty("emailAddress"),

    // Create computed properties
    "actualEmailAddress": Ember.computed("emailAddress", function() {
        console.log("actualEmailAddress function is called: ", this.get("emailAddress"));

    }),

    "emailAddressChanged": Ember.observer("emailAddress", function() {
        console.log("observer is called: ", this.get("emailAddress"));

    })
});