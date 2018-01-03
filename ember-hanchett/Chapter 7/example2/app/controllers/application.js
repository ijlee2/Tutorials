import Controller from "@ember/controller";

export default Controller.extend({
    actions: {
        delete(book) {
            book.deleteRecord();
            console.log(book.get("isDeleted"));

            // Send the HTTP delete request to the server
            book.save();
        }
    }
});
