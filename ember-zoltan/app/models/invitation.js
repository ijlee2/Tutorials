import DS    from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
    "email": DS.attr("string"),

    "isEmailValid"  : Ember.computed.match("email", /^.+@.+\.(com|net|edu)+$/),

    "isFormNotValid": Ember.computed.not("isEmailValid")
});