import Component from "@ember/component";
// Note the relative path to the mixins folder
import common from "../mixins/common";

export default Component.extend(common, {
    propertyComponent: "This is an Ember component property",
    actions: {
        pressed: function() {
            this.edit();
        }
    }
});
