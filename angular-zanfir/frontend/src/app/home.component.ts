import { Component } from "@angular/core";

// Import components
import { NewMessageComponent } from "./new-message.component";
import { MessagesComponent }   from "./messages.component";

@Component({
    selector: "home",
    template: `
        <new-message></new-message>
        <messages></messages>
    `
})

export class HomeComponent {
}