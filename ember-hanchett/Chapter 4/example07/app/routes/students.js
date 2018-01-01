import Route from "@ember/routing/route";
import { later } from "@ember/runloop";
import RSVP from "rsvp";

export default Route.extend({
    model() {
        return new RSVP.Promise(function(resolve, reject) {
            later(function() {
                resolve([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                console.log("Array has been loaded.");

            }, 2000);
        });
    },
    actions: {
        loading(transition, originRoute) {
            console.log("Sorry the students page is taking so long to load!");

//            this.transitionTo("application");
        }
    }
});
