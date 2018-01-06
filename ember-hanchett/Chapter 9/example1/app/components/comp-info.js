import Component from "@ember/component";
//import { inject as service } from "@ember/service";

export default Component.extend({
//    start: service(),
    
    message: null,

    actions: {
        toggleIsOn() {
            // If we do not initialize services in the init initializer,
            // we must use this.get("start"), not this.start.
            this.get("start").toggleProperty("isOn");
            this.set("message", this.get("start").displayIsOn());
        }
    }
});
