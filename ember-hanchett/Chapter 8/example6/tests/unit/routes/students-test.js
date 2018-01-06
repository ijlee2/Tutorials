import { moduleFor, test } from "ember-qunit";

moduleFor("route:students", "Unit | Route | students", {
    // Specify the other units that are required for this test.
    // needs: ["controller:foo"]
});

test("Check that route and someText property exists", function(assert) {
    assert.expect(3);

    const route = this.subject();

    // Check if the route exists
    assert.ok(route);

    assert.equal(route.get("someText"), "some text");

    route.set("someText", "some other text");

    assert.equal(route.get("someText"), "some other text");
});
