import Component from "@ember/component";

export default Component.extend({
    age: "",

    isNumber(value) {
        const number = parseFloat(value);

        return Number.isInteger(number) && number > 0;
    },

    actions: {
        validateInput() {
            const age = this.get("age");

            // Check age
            if (age === "") {
                this.set("errorMessage", "Please enter your age.");

            } else if (!this.isNumber(age)) {
                this.set("errorMessage", "Age must be a positive integer.");

            } else {
                this.set("errorMessage", "");

            }
        }
    }
});
