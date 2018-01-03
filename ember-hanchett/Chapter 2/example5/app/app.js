import Application from "@ember/application";
import Resolver from "./resolver";
import loadInitializers from "ember-load-initializers";
import config from "./config/environment";

// Our imports
import EmberObject from "@ember/object";
import common from "./mixins/common";
import secondMixin from "./mixins/second-mixin";

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);


// Our code
const object = EmberObject.extend(common, secondMixin, {
    propertyObject: "This is an Ember object property."
});

const obj = object.create();

console.log(obj.get("propertyObject"));
console.log(obj.get("propertyMixin"));

console.log(obj.get("isEditing"));
obj.edit();
console.log(obj.get("isEditing"));

// Test the second mixin
console.log(obj.get("propertyMixin2"));


export default App;
