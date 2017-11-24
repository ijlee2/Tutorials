import Ember     from "ember";
import Component from "@ember/component";

export default Component.extend({
    "tagName"          : "span",
    "classNames"       : ["badge", "badge-success", "badge-fade"],
    "classNameBindings": ["isShowing:badge-show"],

    "isShowing": false,

    "isShowingChanged": Ember.observer("isShowing", function() {
        // Users could navigate away from this page in less than 3 seconds. This
        // component will be destroyed, however our setTimeout task tries to run.
        // We save this task to a local variable so that it can be cleaned up
        // during the destroy process. Otherwise, we will see a "calling set on
        // destroyed object" error.
        this._runLater = Ember.run.later(() => this.set("isShowing", false), 3000);
    }),

    resetRunLater() {
        this.set("isShowing", false);
        Ember.run.cancel(this._runLater);
    },

    willDestroy() {
        this.resetRunLater();
        this._super(...arguments);
    }
});