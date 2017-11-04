import { Component } from "@angular/core";

// Import components
import { NavComponent } from "./nav.component";

@Component({
    selector : "app-root",
    template : `
        <nav></nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ["./app.component.css"]
})

export class AppComponent {
}