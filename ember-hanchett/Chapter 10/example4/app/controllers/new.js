import Controller from "@ember/controller";
import cleanURI from "../utils/clean";

export default Controller.extend({
    actions: {
        save() {
            const titleURL = cleanURI(this.get("title"));
            
            const post = this.store.createRecord("post", {
                title: this.get("title"),
                body: this.get("body"),
                author: "Me!",
                titleURL
            });
            post.save();

            this.set("title", "");
            this.set("body", "");

            this.transitionToRoute("index");
        }
    }
});
