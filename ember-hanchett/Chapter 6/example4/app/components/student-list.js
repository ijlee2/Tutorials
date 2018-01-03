import Component from "@ember/component";

export default Component.extend({
    actions: {
        removeComponent() {
            this.get("onRemove")();
        },
        resetComponent() {
            this.get("onReset")();
            
            // Don't use this.attrs!
            // https://locks.svbtle.com/to-attrs-or-not-to-attrs
//            this.attrs.onReset();
        }
    }
});
