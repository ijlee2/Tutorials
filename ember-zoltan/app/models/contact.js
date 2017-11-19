import DS    from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
    "email"  : DS.attr("string"),
    "message": DS.attr("string"),

    "isEmailValid"  : Ember.computed.match("email", /^.+@.+\.(com|net|edu)+$/),
    "isMessageValid": Ember.computed.gte("message.length", 5),

    "isFormValid"   : Ember.computed.and("isEmailValid", "isMessageValid"),
    "isFormNotValid": Ember.computed.not("isFormValid")
});