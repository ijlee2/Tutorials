import Service from "@ember/service";
import { camelize } from "@ember/string";
import EmberObject from "@ember/object";

import MapUtil from "../utils/google-maps";

export default Service.extend({
    init() {
        if (!this.get("cachedMaps")) {
            this.set("cachedMaps", EmberObject.create());
        }

        if (!this.get("mapUtil")) {
            this.set("mapUtil", MapUtil.create());
        }
    },

    getMapElement(location) {
        const camelizedLocation = camelize(location);

        let element = this.get(`cachedMaps.${camelizedLocation}`);

        if (!element) {
            element = this.createMapElement();

            this.get("mapUtil").createMap(element, location);
            this.set(`cachedMaps.${camelizedLocation}`, element);
        }

        return element;
    },

    createMapElement() {
        const element = document.createElement("div");
        element.className = "map";

        return element;
    }
});