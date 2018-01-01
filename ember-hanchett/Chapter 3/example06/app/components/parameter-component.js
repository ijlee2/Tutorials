import Component from "@ember/component";

export default Component.extend({
    actions: {
        pressed(text) {
            alert(text ? text : "");
        }
    }
});
