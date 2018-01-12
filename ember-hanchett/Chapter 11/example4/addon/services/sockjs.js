import Evented from "@ember/object/evented";
import Service, { inject as service } from "@ember/service";

// The Evented mixin allows Ember objects to subscribe and emit events
export default Service.extend(Evented, {
    // Inject the websockets service
    websockets: service(),

    socket: null,

    setup(url) {
        // Indicate where the server is located
        let socket = this.get("websockets").socketFor(url);

        this.set("socket", socket);

        // Define event handlers. All event handlers are added via the on method and
        // take 3 arguments: event name, callback function, and the context in which
        // the callback is to be invoked.
        socket.on("message", event => {
            this.trigger("receiveMessage", event.data);

            console.log(`Received message:\n"${event.data}"`);

        }, this);
    },

    sendMessage(message) {
        const socket = this.get("socket");

        if (socket) {
            socket.send(message);

            console.log(`Sent message:\n"${message}"`);
        }
    }
});
