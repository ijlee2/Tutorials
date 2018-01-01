import Controller from "@ember/controller";

export default Controller.extend({
    property2: "test",
    property3: true,
    actions: {
        enter(value) {
            alert(this.get("property1"));
            alert(this.getProperties("property1", "property2").property1);
            alert(value);
            this.toggleProperty(property3);
        }
    }
});
