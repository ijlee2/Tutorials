import Controller from "@ember/controller";

export default Controller.extend({
    actions: {
        updateBook() {
            let book = this.get("model");

            book.set("year", new Date(book.get("year")));
            book.save();

            this.transitionToRoute("application");
        },
        cancel() {
            return true;
        }
    }
});
