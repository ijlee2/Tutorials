import Controller from "@ember/controller";

export default Controller.extend({
    init() {
        this._super(...arguments);

        this.set("info", {});
    },
    actions: {
        createBook() {
            const info = this.get("info");

            const newBook = this.store.createRecord("book", {
                title: info.title,
                author: info.author,
                year: new Date(info.year)
            });

            newBook
                .save()
                .then(() => {
                    this.transitionToRoute("application");
                    this.set("info", {});

                }, () => {
                    console.log("createBook failed");

                });
        },
        cancel() {
            // Let the route take care of what happens next
            return true;
        }
    }
});
