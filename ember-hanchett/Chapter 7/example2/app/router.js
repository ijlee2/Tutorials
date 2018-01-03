import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route("books", {
        path: "/books/:book_id"
    });
    this.route("new");
});

export default Router;