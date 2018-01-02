import Controller from "@ember/controller";

export default Controller.extend({
    actions: {
        removeController() {
            this.send("removeRoute");
        },
        resetController() {
            this.send("resetRoute");
        }
    }
});
