import Route from "@ember/routing/route";

export default Route.extend({
    model(params) {
        return this.store.query("post", {
            // We assume that the titleURLs are unique
            "orderBy": "titleURL",
            "equalTo": params.titleURL
        });
    }
});
