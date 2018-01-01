import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
    model() {
        return new RSVP.Promise(function(resolve) {
            resolve({
                message: "Promise has been resolved."
            });
        });

        // Option 1
        return RSVP.reject("Promise resulted in an error.");

        // Option 2
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
