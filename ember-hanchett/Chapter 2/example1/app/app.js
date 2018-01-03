import Application from "@ember/application";
import Resolver from "./resolver";
import loadInitializers from "ember-load-initializers";
import config from "./config/environment";

// Import the Light object
import Light from "./Light";

const App = Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver
});

loadInitializers(App, config.modulePrefix);

// Run the function that we created in Light.js file
Light();

export default App;
