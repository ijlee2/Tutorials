import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
    model() {
        return new RSVP.Promise(function(resolve, reject) {
            // Create an error to occur to load teachers-error template
            reject("Promise resulted in an error.");

        });
    }
    // Alternative
    // actions: {
    //     error(error, transition) {
    //         console.log("Sorry the teachers page resulted in an error!");

    //         this.transitionTo("application");
    //     }
    // }
});
