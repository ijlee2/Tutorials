import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("font-sizer", "Integration | Component | font sizer", {
    integration: true
});

test("Check style attribute", function(assert) {
    this.render(hbs`{{font-sizer size=fontSize}}`);

    this.set("fontSize", "38px");

    assert.equal(this.$("div").attr("style"), "font-size: 38px", "Font size has been set to 38px.");
});

test("Check updateText action", function(assert) {
    // Both assertions must pass
    assert.expect(2);

    this.render(hbs`{{font-sizer}}`);

    assert.equal(this.$("#font-sizer-text").text(), "Hello world!", `Initially, text is equal to "Hello world!"`);

    this.$("button").click();

    assert.equal(this.$("#font-sizer-text").text(), "Hi world!", `After clicking on button, text is equal to "Hi world!"`);
});