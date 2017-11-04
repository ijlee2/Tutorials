import { Component }      from "@angular/core";
import { ActivatedRoute } from "@angular/router";

// Import services
import { WebService } from "./web.service";

// Create the component decorator, which lets us mark a class as an Angular
// component and provide metadata on how the component should work
@Component({
    selector: "messages",
    template: `
        <div *ngFor="let message of webService.messages | async">
            <mat-card class="card">
                <mat-card-title [routerLink]="['/messages', message.owner]" style="cursor: pointer">{{message.owner}}</mat-card-title>
                <mat-card-content>{{message.text}}</mat-card-content>
            </mat-card>
        </div>
    `
})

// Create the class that we are decorating
export class MessagesComponent {
    constructor(private webService: WebService, private route: ActivatedRoute) {}

    ngOnInit() {
        // Find all messages by the name
        const {name} = this.route.snapshot.params;

        this.webService.getMessages(name);

        this.webService.getUser().subscribe();
    }
}