import DS from "ember-data";

export default DS.Model.extend({
    subject: DS.attr("string"),
    // A class belongs to an instructor
    instructor: DS.belongsTo("instructor")
});
