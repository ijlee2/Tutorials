import { Injectable }    from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Hero } from "./hero";

// Injectable decorator tells TypeScript to emit metadata about the service
@Injectable()

export class HeroService {
    private headers   = new Headers({"Content-Type": "application/json"});
    private heroesUrl = "api/heroes";

    constructor(private http: Http) {}

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            // Convert the Observable to a Promise
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    /*
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 1 second delay
            setTimeout(() => resolve(this.getHeroes()), 1000);

        });
    }
    */

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http.post(this.heroesUrl, JSON.stringify({name}), {"headers": this.headers})
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http.put(url, JSON.stringify(hero), {"headers": this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;

        return this.http.delete(url, {"headers": this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error("An error occurred", error);

        return Promise.reject(error.message || error);
    }
}