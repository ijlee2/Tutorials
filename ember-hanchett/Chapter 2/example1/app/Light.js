import EmberObject from "@ember/object";

export default function() {
    // Create a Light class by creating a Ember class. Through inheritance,
    // the Light class has all the methods and bindings of the Ember object.
    const Light = EmberObject.extend({
        isOn: false,

        // Define what happens when an instance is created
        init() {
            console.log(`The isOn property is defaulted to ${this.get("isOn")}.`);
        }
    });

    // Add properties and methods
    Light.reopen({
        color: "yellow"
    });

    // Add static properties and methods (shared by all instances)
    Light.reopenClass({
        wattage: 80
    });

    // Create an instance of Light class
    const bulb = Light.create();

    // Get the properties of the bulb object
    console.log("isOn: " + bulb.get("isOn"));
    console.log("color: " + bulb.get("color"));
    console.log("wattage (static): " + Light.wattage);

    // Set the properties of the bulb object
    bulb.set("isOn", true);
    console.log("isOn (new): " + bulb.get("isOn"));
}
