import { computed } from "@ember/object";
import DS from "ember-data";

export default DS.Model.extend({
    firstName: DS.attr("string"),
    lastName: DS.attr("string"),

    // Use a unit test to test computed properties
    fullName: computed("firstName", "lastName", function() {
        const firstName = this.get("firstName");
        const lastName  = this.get("lastName");

        return `Full Name: ${firstName} ${lastName}`;
    })
});
