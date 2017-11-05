import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import EmberObject from "@ember/object";
import { run } from "@ember/runloop";

// Test object
const rental = EmberObject.create({
    "image"       : "fake.png",
    "title"       : "test-title",
    "owner"       : "test-owner",
    "propertyType": "test-type",
    "city"        : "test-city",
    "bedrooms"    : 3
});

moduleForComponent("rental-listing", "Integration | Component | rental listing", {
    "integration": true
});

test("should display rental details", function(assert) {
    this.set("rentalObj", rental);
    this.render(hbs`{{rental-listing rental=rentalObj}}`);

    assert.equal(this.$(".listing h3").text(), "test-title", "Title: test-title");
    assert.equal(this.$(".listing .owner").text().trim(), "Owner: test-owner", "Owner: test-owner");
});

test("should toggle wide class on click", function(assert) {
    this.set("rentalObj", rental);
    this.render(hbs`{{rental-listing rental=rentalObj}}`);

    assert.equal(this.$(".image.wide").length, 0, "initially rendered small");
    run(() => document.querySelector(".image").click());

    assert.equal(this.$(".image.wide").length, 1, "rendered wide after click");
    run(() => document.querySelector(".image").click());
    
    assert.equal(this.$(".image.wide").length, 0, "rendered small after second click");
});

/*
test("it renders", function(assert) {
    // Set any properties with this.set("myProperty", "value");
    // Handle any actions with this.on("myAction", function(val) { ... });

    this.render(hbs`{{rental-listing}}`);

    assert.equal(this.$().text().trim(), "");

    // Template block usage:
    this.render(hbs`
        {{#rental-listing}}
            template block text
        {{/rental-listing}}
    `);

    assert.equal(this.$().text().trim(), "template block text");
});
*/