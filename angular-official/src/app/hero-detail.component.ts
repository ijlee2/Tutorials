import { Component, OnInit }        from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location }                 from "@angular/common";

import "rxjs/add/operator/switchMap";

// Import classes
import { Hero } from "./hero";

// Import services
import { HeroService } from "./hero.service";

// The CSS selector name hero-detail will match the element tag that
// identifies this component within a parent component's templates
@Component({
    selector   : "hero-detail",
    templateUrl: "./hero-detail.component.html",
    styleUrls  : ["./hero-detail.component.css"]
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;
    
    constructor (
        private heroService: HeroService,
        private route      : ActivatedRoute,
        private location   : Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get("id")))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        // Use canDeactivate in practice
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}