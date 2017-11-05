import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import wait from "ember-test-helpers/wait";
import RSVP from "rsvp";

const ITEMS = [
    {"city": "San Francisco"},
    {"city": "Portland"},
    {"city": "Seattle"}
];

const FILTERED_ITEMS = [
    {"city": "San Francisco"}
];

moduleForComponent("list-filter", "Integration | Component | list filter", {
    "integration": true
});

test("should initially load all listings", function(assert) {
    // We return promises, since data may be fetched asynchronously
    this.on("filterByCity", () => {
        return RSVP.resolve({"results": ITEMS});
    });

    this.render(hbs`
        {{#list-filter filter=(action "filterByCity") as |results|}}
            <ul>
                {{#each results as |item|}}
                    <li class="city">{{item.city}}</li>
                {{/each}}
            </ul>
        {{/list-filter}}
    `);

    return wait().then(() => {
        assert.equal(this.$(".city").length, 3);
        assert.equal(this.$(".city").first().text().trim(), "San Francisco");

    });

});

test("should update with matching listings", function(assert) {
    this.on("filterByCity", value => {
        if (value === "") {
            return RSVP.resolve({
                "query"  : value,
                "results": ITEMS
            });

        } else {
            return RSVP.resolve({
                "query"  : value,
                "results": FILTERED_ITEMS
            });

        }

    });

    this.render(hbs`
        {{#list-filter filter=(action "filterByCity") as |results|}}
            <ul>
            {{#each results as |item|}}
                <li class="city">
                    {{item.city}}
                </li>
            {{/each}}
            </ul>
        {{/list-filter}}
    `);

    // Simulate filtering results
    this.$(".list-filter input").val("San").keyup();

    return wait().then(() => {
        assert.equal(this.$(".city").length, 1);
        assert.equal(this.$(".city").text().trim(), "San Francisco");

    });

});