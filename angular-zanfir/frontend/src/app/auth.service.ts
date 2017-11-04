import { Injectable }                    from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router }                        from "@angular/router";

@Injectable()

export class AuthService {
    BASE_URL  = "http://localhost:4201/auth";
    TOKEN_KEY = "token";
    NAME_KEY  = "name";

    constructor(private http: Http, private router: Router) {}

    get isAuthenticated() {
        // Use double negative to return true or false
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }

    get tokenHeader() {
        const header = new Headers({
            "Authorization": `Bearer ${localStorage.getItem(this.TOKEN_KEY)}`
        });

        return new RequestOptions({
            "headers": header
        });
    }

    login(loginData) {
        this.http.post(`${this.BASE_URL}/login`, loginData)
            .subscribe(response => {
                this.authenticate(response);
            });
    }

    register(user) {
        // Remove confirmPassowrd
        delete user.confirmPassword;

        this.http.post(`${this.BASE_URL}/register`, user)
            .subscribe(response => {
                this.authenticate(response);
            });
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.NAME_KEY);
    }

    authenticate(response) {
        const {firstName, token} = response.json();

        // Validate the token
        if (!token) return;

        localStorage.setItem(this.TOKEN_KEY, token);
        localStorage.setItem(this.NAME_KEY, firstName);

        // Redirect afterwards
        this.router.navigate(["/"]);
    }
}