import Route from "@ember/routing/route";

export default Route.extend({
    // ES6 shortcut for `model: function() {}`
    model() {
        // Get rentals from `/api/rentals`
        return this.get("store").findAll("rental");
    }
});