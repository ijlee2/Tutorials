import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
    auth: service("session"),

    username: null,
    password: null,

    actions: {
        authenticate() {
            console.log(`let's authenticate with ${this.get("username")} and ${this.get("password")}`);

            this.get("auth")
                .authenticate("authenticator:oauth2", this.get("username"), this.get("password"))
                .then(() => {
                    console.log("You are logged in!");

                    this.get("transition")();
                    //this.send("transition");

                }, () => {
                    console.log("Wrong username or password!");

                });
        }
    }
});
