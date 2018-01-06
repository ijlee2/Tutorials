import Route from "@ember/routing/route";
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";

// Use the mixin to catch errors and transition to the login route
export default Route.extend(ApplicationRouteMixin);
