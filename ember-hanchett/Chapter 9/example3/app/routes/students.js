import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

// This route is available only if the user has been authenticated by the server
export default Route.extend(AuthenticatedRouteMixin, {
    model() {
        return this.store.findAll("student");
    }
});
