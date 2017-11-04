import { test } from "qunit";
import moduleForAcceptance from "ember-official/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | list rentals");


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

});


test("should filter the list of rentals by city", function(assert) {

});


test("should show details for a selected rental", function(assert) {

});