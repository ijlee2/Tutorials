import Component from "@ember/component";

export default Component.extend({
    showText: true,
    actions: {
        toggleText() {
            this.toggleProperty("showText");
        }
    }
});
