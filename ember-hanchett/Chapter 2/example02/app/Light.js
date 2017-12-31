import EmberObject, { computed } from "@ember/object";

export default EmberObject.extend({
    isOn : false,
    color: "yellow",
    age  : null,

    description: computed("isOn", "color", function() {
        return `The ${this.get("color")} light is set to ${this.get("isOn")}.`;
    }),

    fullDescription: computed("description", "age", function() {
        return `${this.get("description")} And the age is ${this.get("age")}.`
    }),

    aliasDescription: computed.alias("fullDescription")
});
