import { validator, buildValidations } from "ember-cp-validations";

export default buildValidations({
    age: [
        validator("number", {
            "allowString": true,
            "integer": true,
            "gt": 0,
            "message": "Age must be a positive integer."
        }),
        validator("presence", {
            "presence": true,
            "message": "Please enter your age."
        })
    ],
    
    email: [
        validator("format", {
            "type": "email",
            "message": "Please enter a valid email."
        }),
        validator("presence", {
            "presence": true,
            "message": "Please enter your email."
        })
    ]
});
