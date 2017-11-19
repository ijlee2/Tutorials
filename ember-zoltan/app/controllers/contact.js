import Ember      from "ember";
import Controller from "@ember/controller";

export default Controller.extend({
    "email"  : "",
    "message": "",

    "isEmailValid"  : Ember.computed.match("email", /^.+@.+\.(com|net|edu)+$/),
    "isMessageValid": Ember.computed.gte("message.length", 5),
    "isFormValid"   : Ember.computed.and("isEmailValid", "isMessageValid"),

    "actions": {
        saveMessage() {
            this.set("response", `Thanks, we received your message and will be in touch soon! Email: ${this.get("isEmailValid")} Message: ${this.get("isMessageValid")}`);

            // Reset the input fields
            this.set("email", "");
            this.set("message", "");
        }
    }
});