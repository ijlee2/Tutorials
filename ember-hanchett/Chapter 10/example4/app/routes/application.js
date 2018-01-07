import Route from "@ember/routing/route";

export default Route.extend({
    model() {
//        return this.store.findAll("post");
    },

    actions: {
        login() {
            this.get("session")
                .open("firebase", {
                    "provider": "twitter"
                })
                .then(data => {
                    console.log(data);
                    
                });
        },

        logout() {
            this.get("session").close();
        }
    }
});
