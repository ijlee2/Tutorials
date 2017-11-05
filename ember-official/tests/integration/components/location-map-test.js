import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import Service from "@ember/service";

const StubMapsService = Service.extend({
    getMapElement(location) {
        this.set("calledWithLocation", location);

        // Create a div to simulate maps service, which creates and caches the map element
        return document.createElement("div");
    }
});

moduleForComponent("location-map", "Integration | Component | location map", {
    "integration": true,

    beforeEach() {
        this.register("service:maps", StubMapsService);
        this.inject.service("maps", {"as": "mapsService"});
    }
});

test("should append map element to container element", function(assert) {
    this.set("myLocation", "New York");
    this.render(hbs`{{location-map location=myLocation}}`);
    
    assert.equal(this.$(".map-container").children().length, 1, "the map element should be put onscreen");
    assert.equal(this.get("mapsService.calledWithLocation"), "New York", "a map of New York should be requested");
});