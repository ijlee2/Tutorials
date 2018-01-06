import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("book-shelf", "Integration | Component | book shelf", {
    integration: true
});

test("it renders", function(assert) {
    this.render(hbs`{{book-shelf}}`);

    assert.ok(true);
});
