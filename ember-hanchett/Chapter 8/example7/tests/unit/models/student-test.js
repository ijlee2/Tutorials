import { moduleForModel, test } from "ember-qunit";

moduleForModel("student", "Unit | Model | student", {
    // Specify the other units that are required for this test.
    needs: []
});

test("The student model exists", function(assert) {
    const model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
});

test("Test student model data", function(assert) {
    assert.expect(2);

    const model = this.subject({
        "firstName": "Erik",
        "lastName" : "Hanchett"
    });

    assert.equal(model.get("firstName"), "Erik", "First name is Erik.");
    assert.equal(model.get("lastName"), "Hanchett", "Last name is Hanchett.");
});