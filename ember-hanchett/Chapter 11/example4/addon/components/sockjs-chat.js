import Component from "@ember/component";
import { get } from "@ember/object";
import { inject as service } from "@ember/service";
import { typeOf } from "@ember/utils";
import layout from "../templates/components/sockjs-chat";

export default Component.extend({
    sockjs: service("sockjs"),

    layout,

    init() {
        this._super(...arguments);

        this.set("message", "");
        this.set("messageReceived", "");

        this.get("sockjs").setup(this.get("url"));
        this.get("sockjs").on("receiveMessage", this, message => {
            this._actionHandler("receiveAction", message);

            this.set("messageReceived", message);
        });
    },

    _actionHandler(actionName, ...args) {
        const action = this.get(actionName);

        if (action && typeOf(action) === "function") {
            // Handle closure actions
            action(...args);

        } else {
            // Always use closure actions (except when you need bubbling)
            get(this, action)(...args);

        }
    },

    actions: {
        onSubmit(username, message) {
            this._actionHandler("sendAction", username, message);
        }
    }
});
