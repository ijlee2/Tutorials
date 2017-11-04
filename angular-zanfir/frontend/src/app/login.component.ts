import { Component } from "@angular/core";

import { AuthService } from "./auth.service";

// Create the component decorator, which lets us mark a class as an Angular
// component and provide metadata on how the component should work
@Component({
    selector: "login",
    template: `
        <mat-card>
            <mat-form-field>
                <input matInput [(ngModel)]="loginData.email" type="email" placeholder="Email">
            </mat-form-field>

            <mat-form-field>
                <input matInput [(ngModel)]="loginData.password" type="password" placeholder="Password">
            </mat-form-field>

            <br>

            <button mat-raised-button color="primary" (click)="login()">Login</button>
        </mat-card>
    `
})

// Create the class that we are decorating
export class LoginComponent {
    loginData = {
        "email"   : "",
        "password": ""
    };

    constructor(private auth: AuthService) {}

    login() {
        this.auth.login(this.loginData);
    }
}