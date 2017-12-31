import Application from "@ember/application";
import Resolver from "./resolver";
import loadInitializers from "ember-load-initializers";
import config from "./config/environment";

import Light from "./Light";

const App = Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver
});

loadInitializers(App, config.modulePrefix);

// Our code
const bulb = Light.create({
    age: 22
});

// The yellow light is set to false.
console.log(bulb.get("description"));

// See the effect of a computed property
bulb.set("isOn", true);

// The yellow light is set to true.
console.log(bulb.get("description"));

// The yellow light is set to true. And the age is 22.
console.log(bulb.get("fullDescription"));
console.log(bulb.get("aliasDescription"));

export default App;
