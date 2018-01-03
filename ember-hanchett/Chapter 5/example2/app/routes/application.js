import Route from "@ember/routing/route";

export default Route.extend({
    actions: {
        enter() {
            alert("Called routes - application.js - enter()");
        },
        action2() {
            alert("Called routes - application.js - action2()");
        }
    }
});
