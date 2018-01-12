import Evented from "@ember/object/evented";
import Service, { inject as service } from "@ember/service";

// The Evented mixin allows Ember objects to subscribe and emit events
export default Service.extend(Evented, {
    // Inject the websockets service
    websockets: service(),

    socket: null,

    init() {
        this._super(...arguments);

        // Indicate where the server is located
        let socket = this.get("websockets").socketFor("ws://localhost:7000");

        this.set("socket", socket);

        // Define event handlers. All event handlers are added via the on method and
        // take 3 arguments: event name, callback function, and the context in which
        // the callback is to be invoked.
        socket.on("message", event => {
            this.trigger("recieveMessage", event.data);

            console.log(`Received message: ${event.data}`);

        }, this);
    },

    sendMessage(message) {
        this.get("socket").send(message);

        console.log(`Sent message: ${message}`);
    }
});
