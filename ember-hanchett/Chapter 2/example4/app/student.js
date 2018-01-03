import EmberObject, { computed } from "@ember/object";

export default EmberObject.extend({
    homeroom: computed.alias("teacher.homeroom"),
    age: "",
    grade: "",
    teacher: null
});