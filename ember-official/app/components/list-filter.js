import Component from "@ember/component";

export default Component.extend({
    "classNames": ["list-filter"],
    "value"     : "",

    init() {
        this._super(...arguments);
        
        this.get("filter")("").then(allResults => {
            this.set("results", allResults.results);

        });
    },

    "actions": {
        handleFilterEntry() {
            const filterInputValue = this.get("value");
            const filterAction     = this.get("filter");

            filterAction(filterInputValue).then(filterResults => {
                if (filterResults.query === this.get("value")) {
                    this.set("results", filterResults.results);
                }

            });
        }
    }
});