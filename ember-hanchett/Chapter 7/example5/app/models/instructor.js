import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr("string"),
    age: DS.attr("number"),
    // An instructor has many classes
    classes: DS.hasMany("class")
});
