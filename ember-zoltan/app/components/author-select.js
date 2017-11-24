import Component from "@ember/component";

export default Component.extend({
    "tagName"   : "select",
    "classNames": ["form-control"],

    "authors": [],
    "book"   : null,

    change(event) {
        const authorId = event.target.value;
        const author   = this.get("authors").find(author => author.id === authorId);

        this.sendAction("action", author, this.get("book"));
    }
});