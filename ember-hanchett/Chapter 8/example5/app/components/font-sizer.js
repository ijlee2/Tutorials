import Component from "@ember/component";
import { computed } from "@ember/object";
import { htmlSafe } from "@ember/string";

export default Component.extend({
    text: "Hello world!",
    
    // Create a style attribute for the div tag
    attributeBindings: ["style"],

    style: computed("size", function() {
        const size = this.get("size");

        return new htmlSafe(`font-size: ${size}`);
    }),

    actions: {
        updateText() {
            this.set("text", "Hi world!");
        }
    }
});
