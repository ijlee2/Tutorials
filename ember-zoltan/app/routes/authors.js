import Route from "@ember/routing/route";

export default Route.extend({
    model() {
        return this.store.findAll("author");
    },

    "actions": {
        editAuthor(author) {
            author.set("isEditing", true);
        },

        cancelEditAuthor(author) {
            author.set("isEditing", false);
            author.rollbackAttributes();
        },

        saveAuthor(author) {
            if (author.get("isNameNotValid")) {
                return;
            }

            author.set("isEditing", false);
            author.save();
        }
    }
});