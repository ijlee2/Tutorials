import { Component } from "@angular/core";

import { AuthService } from "./auth.service";

// Create the component decorator, which lets us mark a class as an Angular
// component and provide metadata on how the component should work
@Component({
    selector: "nav",
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/">Message Board</button>
            <button mat-button routerLink="/messages">Messages</button>

            <span style="flex: 1 1 auto"></span>
            <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Login</button>
            <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button>
            <button *ngIf="auth.isAuthenticated" mat-button routerLink="/user">Welcome {{auth.name}}</button>
            <button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()">Logout</button>
        </mat-toolbar>
    `
})

// Create the class that we are decorating
export class NavComponent {
    constructor(private auth: AuthService) {}
}