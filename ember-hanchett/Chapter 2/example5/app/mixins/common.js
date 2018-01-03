import Mixin from "@ember/object/mixin";

export default Mixin.create({
    isEditing: false,
    propertyMixin: "This is an Ember mixin property.",
    edit: function() {
        this.set("isEditing", true);
        console.log("Starting to edit");
    }
});
