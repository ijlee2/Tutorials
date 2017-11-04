import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { HttpModule }    from "@angular/http";

// Import routes
import { AppRoutingModule } from "./app-routing.module"

// Import loading and configuring the in-memory web API
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService }  from "./in-memory-data.service";

// Import components
import { AppComponent }        from "./app.component";
import { DashboardComponent }  from "./dashboard.component";
import { HeroesComponent }     from "./heroes.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroSearchComponent } from "./hero-search.component";

// Import services
import { HeroService } from "./hero.service";

@NgModule({
    "imports": [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    
    "declarations": [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],

    "providers": [
        HeroService
    ],
    
    "bootstrap": [
        AppComponent
    ]
})

export class AppModule {}