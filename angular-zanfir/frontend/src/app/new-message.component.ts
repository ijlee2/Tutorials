import { Component } from "@angular/core";

// Import services
import { WebService }  from "./web.service";
import { AuthService } from "./auth.service";

// Create the component decorator, which lets us mark a class as an Angular
// component and provide metadata on how the component should work
@Component({
    selector: "new-message",
    template: `
        <mat-card class="card">
            <mat-card-content>
                <mat-form-field>
                    <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
                </mat-form-field>

                <mat-card-actions>
                    <button (click)="post()" mat-button color="primary">POST</button>
                </mat-card-actions>
            </mat-card-content>
        </mat-card>
    `
})

// Create the class that we are decorating
export class NewMessageComponent {
    message = {
        "owner": this.auth.name,
        "text" : ""
    }

    constructor(private webService: WebService, private auth: AuthService) {}

    post() {
        this.webService.postMessage(this.message);
    }
}