import Controller from "@ember/controller";

export default Controller.extend({
    actions: {
        filterByCity(param) {
            if (param !== "") {
                return this.get("store")
                    .query("rental", {"city": param})
                    .then(results => ({"query": param, results}));

            } else {
                return this.get("store")
                    .findAll("rental")
                    .then(results => ({"query": param, results}));

            }
        }
    }
});