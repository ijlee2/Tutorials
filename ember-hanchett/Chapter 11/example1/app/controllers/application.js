import Controller from "@ember/controller";

export default Controller.extend({
    actions: {
        displayLogMessage() {
            this.myLogger.log("Hello world!");
        }
    }
});
