import { test } from "qunit";
import moduleForAcceptance from "ember-official/tests/helpers/module-for-acceptance";
import Service from "@ember/service";

const StubMapsService = Service.extend({
    getMapElement() {
        return document.createElement("div");
    }
});


moduleForAcceptance("Acceptance | list rentals", {
    beforeEach() {
        this.application.register("service:stubMaps", StubMapsService);
        this.application.inject("component:location-map", "maps", "service:stubMaps");
    }
});


test("should show rentals as the home page", function(assert) {
    // Load the given URL
    visit("/");

    // Wait until the previous commands have been run
    andThen(function() {
        assert.equal(currentURL(), "/rentals", "should redirect to rentals page");
    });
});


test("should link to information about the company", function(assert) {
    visit("/");

    // Simulate a mouse click
    click(`a:contains("About")`);

    andThen(function() {
        assert.equal(currentURL(), "/about", "should redirect to about us page");
    });
});


test("should link to contact information", function(assert) {
    visit("/");

    click(`a:contains("Contact")`);

    andThen(function() {
        assert.equal(currentURL(), "/contact", "should redirect to contact us page");
    });
});


test("should list available rentals", function(assert) {
    visit("/");

    andThen(function() {
        assert.equal(find(".listing").length, 3, "should see 3 listings");
    });
});


test("should filter the list of rentals by city", function(assert) {
    visit("/");

    fillIn(".list-filter input", "Seattle");
    keyEvent(".list-filter input", "keyup", 69);

    andThen(function() {
        assert.equal(find(".listing").length, 1, "should show 1 listing");
        assert.equal(find(`.listing .location:contains("Seattle")`).length, 1, "should contain 1 listing with location Seattle");
    });
});


test("should show details for a selected rental", function(assert) {
    visit("/rentals");
    
    click(`a:contains("Grand Old Mansion")`);
    
    andThen(function() {
        assert.equal(currentURL(), "/rentals/grand-old-mansion", "should navigate to show route");
        assert.equal(find(".show-listing h2").text(), "Grand Old Mansion", "should list rental title");
        assert.equal(find(".description").length, 1, "should list a description of the property");
    });
});