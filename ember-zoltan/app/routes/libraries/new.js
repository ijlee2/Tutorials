import Route from "@ember/routing/route";

export default Route.extend({
    model() {
        return this.store.createRecord("library");
    },

    // Use setupController to set controller parameters in a route
    "setupController": function(controller, model) {
        this._super(controller, model);

        controller.set("title", "Add a new library");
        controller.set("buttonLabel", "Create");
    },

    // Use renderTemplate to change the default template location
    renderTemplate() {
        this.render("libraries/form");
    },

    "actions": {
        saveLibrary(library) {
            library
                .save()
                .then(() => this.transitionTo("libraries"));
        },

        // willTransition is called when the user leaves the page (route)
        // We use this to reset the model if the model doesn't get saved
        // to the database
        willTransition() {
            // rollbackAttributes removes the record from the store
            // if the model is new
            this.controller.get("model").rollbackAttributes();
        }
    }
});