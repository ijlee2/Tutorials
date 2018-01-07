import Component from "@ember/component";

export default Component.extend({
    classNames: ["draggable-dropzone"],
    classNameBindings: ["dragClass"],
    dragClass: "deactivated",

    dragLeave(event) {
        event.preventDefault();

        return this.set("dragClass", "deactivated");
    },
    dragOver(event) {
        event.preventDefault();

        return this.set("dragClass", "activated");
    },
    drop(event) {
        this.set("dragClass", "deactivated");

        const data = event.dataTransfer.getData("text/data");
        event.target.appendChild(document.getElementById(data));
    }
});
