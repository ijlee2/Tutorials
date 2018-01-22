import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route("friends", function() {
        this.route("new");

        this.route("show", {
            path: ":friend_id"
        });

        this.route("edit", {
            path: ":friend_id/edit"
        });
    });
});

export default Router;
