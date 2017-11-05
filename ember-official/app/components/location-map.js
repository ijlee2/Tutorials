import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
    "maps": service(),

    didInsertElement() {
        this._super(...arguments);

        const location   = this.get("location");
        const mapElement = this.get("maps").getMapElement(location);

        this.$(".map-container").append(mapElement);
    }
});