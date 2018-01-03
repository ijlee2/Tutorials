import Route from "@ember/routing/route";

export default Route.extend({
    model(params) {
        return this.store.findRecord("book", params.book_id);
    },
    actions: {
        cancel() {
            // Let the application take care of what happens next
            return true;
        }
    }
});
