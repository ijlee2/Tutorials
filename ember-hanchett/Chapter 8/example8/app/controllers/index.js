import Controller from "@ember/controller";

export default Controller.extend({
    myValue: "value",
    actions: {
        pressed(value) {
            this.set("myValue", value);
        }
    }
});
