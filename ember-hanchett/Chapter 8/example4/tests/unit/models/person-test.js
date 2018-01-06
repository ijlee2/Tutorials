import { moduleForModel, test } from "ember-qunit";
import { run } from "@ember/runloop";

moduleForModel("person", "Unit | Model | person", {
    // Specify the other units that are required for this test.
    needs: []
});

test("The person model exists.", function(assert) {
    const model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
});

test("Check computed property fullName", function(assert) {
    const person = this.subject({
        "firstName": "Erik",
        "lastName" : "Hanchett"
    });
    
    assert.equal(person.get("fullName"), "Full Name: Erik Hanchett");
});

test("Check computed property fullName (w/ asynchronous call)", function(assert) {
    const person = this.subject();

    run(() => {
        person.set("firstName", "Erik");
        person.set("lastName", "Hanchett");
    });

    assert.equal(person.get("fullName"), "Full Name: Erik Hanchett");
});