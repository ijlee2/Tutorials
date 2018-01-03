import EmberObject, { computed } from "@ember/object";

export default EmberObject.extend({
    firstName: null,
    lastName: null,
    nickname: computed.oneWay("firstName")
});