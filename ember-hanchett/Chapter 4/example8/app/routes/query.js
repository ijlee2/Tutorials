import Route from "@ember/routing/route";

export default Route.extend({
    resetController: function(controller, isExiting, transition) {
        this._super(...arguments);

        if (isExiting) {
            // Reset query parameters
            controller.set("student", null);

            console.log("Query parameters have been reset.");
        }
    }
});
