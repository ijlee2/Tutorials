import Application from "@ember/application";
import Resolver from "./resolver";
import loadInitializers from "ember-load-initializers";
import config from "./config/environment";

// Our imports
import { observer } from "@ember/object";
import { once } from "@ember/runloop";
import Light from "./Light";

const App = Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver
});

loadInitializers(App, config.modulePrefix);


// Our code
const bulb1 = Light.create({age: 22});

// The value of isOn has changed.
bulb1.set("isOn", true);


// Test adding multiple properties to the observer
Light.reopen({
    isAnythingChanged: observer("isOn", "color", function() {
        console.log("The value of isOn or color has changed.");
    })
});

const bulb2 = Light.create({age: 22});

// The value of isOn or color has changed.
bulb2.set("isOn", true);

// The value of isOn or color has changed.
bulb2.set("color", "blue");


// Test possible synchronous issues
Light.reopen({
    checkIsOn: observer("isOn", function() {
        console.log(this.get("fullDescription"));
    })
})

const bulb3 = Light.create({age: 22});

// The yellow light is set to [true/false]. And the age is 22.
bulb3.set("isOn", true);


// Use run.once to handle synchronicity
Light.reopen({
    checkIsOn: observer("isOn", "color", function() {
        once(this, "checkChanged");
    }),
    checkChanged: observer("description", function() {
        console.log(this.get("description"));
    })
});

const bulb4 = Light.create({age: 22});

bulb4.set("isOn", true);
bulb4.set("color", "blue");


export default App;
