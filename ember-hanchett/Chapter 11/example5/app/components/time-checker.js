import Component from "@ember/component";
import { computed } from "@ember/object";
import { later } from "@ember/runloop";
import moment from "moment";

export default Component.extend({
    diff: computed("startTime", "currentTime", function() {
        return this.get("currentTime").diff(this.get("startTime"), "seconds");
    }),

    init() {
        this._super(...arguments);

        this.set("startTime", moment());
        this.set("currentTime", "");

        this.startWatchingTime();
    },

    startWatchingTime() {
        this.set("currentTime", moment());

        // Use later instead of setTimeout to avoid possible issues
        // with the Ember run loop
        later(() => {
            this.startWatchingTime();

        }, 1000);
    }
});
