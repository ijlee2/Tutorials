import Route from "@ember/routing/route";

export default Route.extend({
    // Define lifecycle hooks
    beforeModel() {
        // Redirect to the rentals page
        this.replaceWith("rentals");
    }
});
