import Component from "@ember/component";

export default Component.extend({
    init() {
        this._super(...arguments);

        this.set("listOfStudents", []);
        this.setup();
    },
    setup() {
        let students = this.get("listOfStudents");
        
        students.clear();

        students.pushObject("Erik");
        students.pushObject("Bob");
        students.pushObject("Suze");
    },
    actions: {
        remove() {
            this.get("listOfStudents").popObject();
        },
        reset() {
            this.setup();
        }
    }
});
