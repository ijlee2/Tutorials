import Controller, { inject } from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
    // Access the parent controller and properties
    parentController: inject("parent"),

    // Set the parent property (read-only)
    parent: computed.reads("parentController.model")
});
