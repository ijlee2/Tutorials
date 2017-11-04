import { Component }               from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

// Import services
import { AuthService } from "./auth.service";

// Note, with webpack, we do not need to provide moduleId
@Component({
    moduleId   : module.id,
    selector   : "register",
    templateUrl: "register.component.html",
    styles     : [`
        .error {
            background-color: #fff0f0
        }
    `]
})

export class RegisterComponent {
    form;

    constructor(private formBuilder: FormBuilder, private auth: AuthService) {
        this.form = formBuilder.group({
            "firstName"      : ["", Validators.required],
            "lastName"       : ["", Validators.required],
            "email"          : ["", [Validators.required, isEmailValid()]],
            "password"       : ["", Validators.required],
            "confirmPassword": ["", Validators.required]
        }, {
            "validator": isPasswordValid("password", "confirmPassword")
        });
    }

    onSubmit() {
        this.auth.register(this.form.value);
    }

    isEmpty(control) {
        // Check if the input is empty
        return this.form.controls[control].touched && this.form.controls[control].invalid;
    }
}

function isPasswordValid(field1, field2) {
    return form => {
        if (form.controls[field1].value !== form.controls[field2].value) {
            return {
                "invalidPassword": true
            };
        }
    };
}

function isEmailValid() {
    // Source: http://emailregex.com/
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return control => {
        return (regex.test(control.value)) ? null : { "invalidEmail": true };
    };
}