import { underscore } from "@ember/string";
import DS from "ember-data";

export default DS.JSONAPISerializer.extend({
    // Set primary key to _id
    // primaryKey: "_id",
    
    keyForAttribute(attr) {
        return underscore(attr);
    }
});
