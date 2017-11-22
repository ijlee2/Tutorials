import DS    from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
    "name"   : DS.attr("string"),
    "address": DS.attr("string"),
    "phone"  : DS.attr("string"),

    "isNameValid": Ember.computed.notEmpty("name")
});