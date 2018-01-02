import Component from "@ember/component";

export default Component.extend({
    actions: {
        removeComponent() {
            this.get("onRemove")();
        },
        resetComponent() {
            // Alternative to writing this.get("onReset")();
            this.attrs.onReset();
        }
    }
});
