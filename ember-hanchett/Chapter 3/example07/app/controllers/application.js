import Controller from "@ember/controller";

export default Controller.extend({
    helloText: "Hello world",
    isChecked: true,
    actions: {
        pressed() {
            console.log("A key has been pressed.");
        }
    }
});
