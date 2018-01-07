import Component from "@ember/component";

export default Component.extend({
    // Change the component from a div to an img
    tagName: "img",
    classNames: ["draggable-item"],
    attributeBindings: ["draggable", "src"],
    
    draggable: "true",
    src: "https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png",

    dragStart(event) {
        event.dataTransfer.setData("text/data", event.target.id);
    }
});
