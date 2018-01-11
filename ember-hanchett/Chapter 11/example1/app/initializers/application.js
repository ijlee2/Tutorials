import EmberObject from "@ember/object";
import moment from "moment";

export function initialize(application ) {
    const MyLogger = EmberObject.extend({
        log(message) {
            const time = moment().format("MMMM Do YYYY, h:mm:ss a");

            console.log(`${time}: ${message}`);
        }
    });

    // Register a new factory (myLogger is the factory type, zzz is the factory name)
    application.register("myLogger:zzz", MyLogger);

    // Make the myLogger:zzz factory available to all controllers
    application.inject("controller", "myLogger", "myLogger:zzz");
}

export default {
    initialize
};
