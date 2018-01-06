import { moduleFor, test } from "ember-qunit";

moduleFor("controller:index", "Unit | Controller | index", {
    // Specify the other units that are required for this test.
    // needs: ["controller:foo"]
});

// Replace this with your real tests.
test("The index controller exists", function(assert) {
    const controller = this.subject();
    assert.ok(controller);
});

test("Check myValue property", function(assert) {
    assert.expect(2);

    const controller = this.subject();

    assert.equal(controller.get("myValue"), "value");

    controller.send("pressed", "new value");

    assert.equal(controller.get("myValue"), "new value");
});