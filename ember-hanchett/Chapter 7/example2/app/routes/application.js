import Route from "@ember/routing/route";

export default Route.extend({
    model() {
        return this.store.findAll("book");
    },
    actions: {
        cancel() {
            // Handle the cancel action for both new and book routes
            this.transitionTo("application");
        }
    }
});
