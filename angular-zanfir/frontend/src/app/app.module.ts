import { NgModule }                         from "@angular/core";
import { RouterModule }                     from "@angular/router";
import { BrowserModule          }           from "@angular/platform-browser";
import { BrowserAnimationsModule }          from "@angular/platform-browser/animations";
import { HttpModule }                       from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule
} from "@angular/material";

// Import components
import { AppComponent }        from "./app.component";
import { NavComponent }        from "./nav.component";
import { HomeComponent }       from "./home.component";
import { LoginComponent }      from "./login.component";
import { RegisterComponent }   from "./register.component";
import { UserComponent }       from "./user.component";
import { MessagesComponent }   from "./messages.component";
import { NewMessageComponent } from "./new-message.component";

// Import services
import { WebService }  from "./web.service";
import { AuthService } from "./auth.service";

const routes = [
    {
        path     : "",
        component: HomeComponent
    },
    {
        path     : "login",
        component: LoginComponent
    },
    {
        path     : "register",
        component: RegisterComponent
    },
    {
        path     : "user",
        component: UserComponent
    },
    {
        path     : "messages",
        component: MessagesComponent
    },
    {
        path     : "messages/:name",
        component: MessagesComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        UserComponent,
        MessagesComponent,
        NewMessageComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        MatToolbarModule
    ],
    providers: [WebService, AuthService],
    bootstrap: [AppComponent]
})

export class AppModule {}