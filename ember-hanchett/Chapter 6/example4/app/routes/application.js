import Route from "@ember/routing/route";

export default Route.extend({
    listOfStudents: [],
    beforeModel() {
        this.reset();
    },
    model() {
        return this.get("listOfStudents");
    },
    reset() {
        let students = this.get("listOfStudents");

        students.clear();

        students.pushObject("Tiffany");
        students.pushObject("Zack");
        students.pushObject("George");
    },
    actions: {
        removeRoute() {
            this.get("listOfStudents").popObject();
        },
        resetRoute() {
            this.reset();
        }
    }
});
