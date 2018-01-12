import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import $ from "jquery";

export default Controller.extend({
    sockjs: service("sockjs"),

    actions: {
        receiveMessage(message) {
            $("#chat-content").val((index, text) => `${text}${message}\n`);

            this.set("messageReceived", message);
        },

        sendMessage(username, message) {
            this.get("sockjs").sendMessage(`${username}: ${message}`);
        }
    }
});