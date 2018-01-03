import Controller from "@ember/controller";

export default Controller.extend({
    init() {
        this._super(...arguments);
        
        // Initializing the students array as written in the book will result in
        // an avoid-leaking-state-in-ember-objects error
        this.students = [
            {
                name: "Erik"
            },
            {
                name: "Jim"
            },
            {
                name: "Jane"
            }
        ];
    }
});
