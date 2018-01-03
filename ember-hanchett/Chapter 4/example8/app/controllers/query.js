import Controller from "@ember/controller";

export default Controller.extend({
    // Bind the student query parameter in the URL with the student property
    // in this controller
    queryParams: ["student"],
    student: null
});
