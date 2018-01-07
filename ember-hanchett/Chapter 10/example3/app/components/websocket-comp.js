import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
    websockets: service(),

    socket: null,
    message: "",

    init() {
        this._super(...arguments);

        // Indicate where the server is located
        const socket = this.get("websockets").socketFor("ws://localhost:7000/");

        this.set("socket", socket);

        socket.on("open", this.myOpenHandler, this);
        socket.on("message", this.myMessageHandler, this);
        socket.on("close", () => {
            console.log("Closed socket.");

        }, this);
    },

    myOpenHandler(event) {
        console.log("Called myOpenHandler");
        console.log(event);
    },

    myMessageHandler(event) {
        this.set("message", event.data);
    },

    actions: {
        sendButtonPressed() {
            this.get("socket").send("Hello Websocket World!");
        }
    }
});
