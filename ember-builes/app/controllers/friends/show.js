import Controller from "@ember/controller";

export default Controller.extend({
    actions: {
        delete(model) {
            console.log("Called delete action in show controller");

            model
                .destroyRecord()
                .then(() => {
                    this.transitionToRoute("friends");

                }, () => {
                    console.log("Internal Server Error (500)");

                });
        }
    }
});
