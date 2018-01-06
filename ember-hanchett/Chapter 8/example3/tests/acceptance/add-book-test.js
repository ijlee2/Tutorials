import { test } from "qunit";
import moduleForAcceptance from "example3/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | add book");

test("Visit / and add two books", function(assert) {
    // visit, fillIn, and click return a promise when all asynchronous actions are complete
    visit("/");

    fillIn("input", "My first book");
    click("button");

    andThen(function() {
        assert.equal(currentURL(), "/");
        assert.equal(find("li:last").text(), "My first book");

        fillIn("input", "My second book");
        click("button");

        andThen(function() {
            assert.equal(currentURL(), "/");
            assert.equal(find("li:last").text(), "My second book");
        });
    });
});
