import Controller from "@ember/controller";

export default Controller.extend({
    actions: {
        enter() {
            this.transitionToRoute("page2");
        }
    }
});
