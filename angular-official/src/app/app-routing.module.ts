import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Import components
import { DashboardComponent  } from "./dashboard.component";
import { HeroesComponent     } from "./heroes.component";
import { HeroDetailComponent } from "./hero-detail.component";

// Save the routes to a variable
const routes: Routes = [
    {
        "path"      : "",
        "redirectTo": "/dashboard",
        "pathMatch" : "full"
    },
    {
        "path"     : "dashboard",
        "component": DashboardComponent
    },
    {
        "path"     : "heroes",
        "component": HeroesComponent
    },
    {
        "path"     : "detail/:id",
        "component": HeroDetailComponent
    }
];

@NgModule({
    "imports": [RouterModule.forRoot(routes)],
    "exports": [RouterModule]
})

export class AppRoutingModule {}