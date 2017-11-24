import Component from "@ember/component";

export default Component.extend({
    "tagName"   : "select",
    "classNames": ["form-control"],

    "libraries": [],
    "book"     : null,

    change(event) {
        const libraryId = event.target.value;
        const library   = this.get("libraries").find(library => library.id === libraryId);

        this.sendAction("action", library, this.get("book"));
    }
});