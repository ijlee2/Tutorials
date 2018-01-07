import Component from "@ember/component";
import Validations from "./validations";

export default Component.extend(Validations, {
    age: "",
    email: "",
    
    errorMessage: {
        "age": "",
        "email": ""
    },

    actions: {
        validateInput() {
            this.validate()
                .then(({model, validations}) => {
                    // Check age
                    if (model.get("validations.attrs.age.isValid")) {
                        this.set("errorMessage.age", "");

                    } else {
                        this.set("errorMessage.age", model.get("validations.attrs.age.messages"));

                    }

                    // Check email
                    if (model.get("validations.attrs.email.isValid")) {
                        this.set("errorMessage.email", "");

                    } else {
                        this.set("errorMessage.email", model.get("validations.attrs.email.messages"));

                    }

                }, error => {
                    console.log(error);

                });
        }
    }
});
