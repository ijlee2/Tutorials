import Controller from "@ember/controller";

export default Controller.extend({
    actions: {
        action1() {
            alert("Called controllers - application.js - action1()");
        },
        action2() {
            alert("Called controllers - application.js - action2()");

            // By default, all controller actions return false. By returning true,
            // action2 will bubble up to the application route after the alert box
            // is displayed.
            return true;
        },
        action3(value) {
            alert(`Called controllers - application.js - action3(${value})`);
        }
    }
});
