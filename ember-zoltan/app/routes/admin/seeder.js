import Route from "@ember/routing/route";
import RSVP  from "rsvp";

export default Route.extend({
    model() {
        // Make promises to retrieve these models
        return RSVP.hash({
            "libraries": this.store.findAll("library"),
            "books"    : this.store.findAll("books"),
            "authors"  : this.store.findAll("author")
        });
    },

    setupController(controller, model) {
        controller.set("libraries", model.libraries);
        controller.set("books", model.books);
        controller.set("authors", model.authors);

        this._super(controller, model);
    }
});