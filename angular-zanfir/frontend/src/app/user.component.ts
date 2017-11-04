import { Component } from "@angular/core";

// Import services
import { WebService } from "./web.service";

@Component({
    selector: "user",
    template: `
        <mat-card class="card">
            <mat-card-content>
                <mat-form-field>
                    <input [(ngModel)]="model.firstName" matInput placeholder="First Name">
                </mat-form-field>

                <mat-form-field>
                    <input [(ngModel)]="model.lastName" matInput placeholder="Last Name">
                </mat-form-field>

                <mat-card-actions>
                    <button mat-raised-button (click)="post()" color="primary">Save Changes</button>
                </mat-card-actions>
            </mat-card-content>
        </mat-card>
    `
})

// Create the class that we are decorating
export class UserComponent {
    model = {
        "firstName": "",
        "lastName" : ""
    }

    constructor(private webService: WebService) {}

    ngOnInit() {
        this.webService.getUser().subscribe(response => {
            this.model.firstName = response.firstName;
            this.model.lastName  = response.lastName;
        });
    }

    post() {
        this.webService.saveUser(this.model).subscribe();
    }
}