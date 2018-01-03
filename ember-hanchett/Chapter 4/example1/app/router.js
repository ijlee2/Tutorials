import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    // Visiting localhost:4200/aboutme will redirect the user to the about page
    this.route("about", {path: "/aboutme"}, function() {
        // Set nested routes
        this.route("location");
        this.route("job");
    });

    // Use a wildcard to handle page not found
    this.route("page-not-found", {path: "/*path"});
});

export default Router;
