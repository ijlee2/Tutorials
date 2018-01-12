import Component from '@ember/component';
import $ from "jquery";

export default Component.extend({
    init() {
        this._super(...arguments);

        this.set("message", "");
        this.set("messageReceived", "");
        
        this.sockjs.on("recieveMessage", this, "recieveMessage");
    },

    recieveMessage(message) {
        $("#chat-content").val((index, text) => `${text}${message}\n`);

        this.set("messageReceived", message);
    },

    actions: {
        onSubmit(username, message) {
            this.sockjs.sendMessage(`${username}: ${message}`);
        }
    }
});
