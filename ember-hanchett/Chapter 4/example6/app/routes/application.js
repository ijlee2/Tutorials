import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
    model() {
        // Case 1: Resolve
        return new RSVP.Promise(function(resolve) {
            resolve({
                message: "Promise has been resolved."
            });
        });

        // Case 2: Reject
        // Open Console to see the error message.
        // return RSVP.reject("Promise resulted in an error.");

        // Case 3: Reject
        // return new RSVP.Promise(function(resolve, reject) {
        //     reject("Promise resulted in an error.");

        // }).then(null, function() {
        //     return {
        //         message: "Returned from rejection."
        //     };

        // });
    },

    setupController(controller, model) {
        this._super(controller, model);

        console.log(model.message);
    },

    actions: {
        // Create logic for error-handling
        error(reason) {
            console.log(reason);
        }
    }
});
