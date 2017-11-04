import { Injectable }  from "@angular/core";
import { Http }        from "@angular/http";
import { MatSnackBar } from "@angular/material";

import "rxjs/add/operator/toPromise";
import { Subject } from "rxjs/Rx";

import { AuthService} from "./auth.service";

@Injectable()

export class WebService {
    BASE_URL = "http://localhost:4201/api";
    
    private messagesStore   = [];
    private messagesSubject = new Subject();

    messages = this.messagesSubject.asObservable();

    // Inject an instance of Http
    constructor(private http: Http, private auth: AuthService, private snackBar: MatSnackBar) {
        // Load messages
        this.getMessages();
    }

    getMessages(user = "") {
        // Note, try-catch statement does not work with an Observable or a Promise
        user = (user) ? `/${user}` : "";

        // Listen to incoming data from an Observable
        this.http.get(`${this.BASE_URL}/messages${user}`)
            .subscribe(response => {
                this.messagesStore = response.json();

                // Let observers such as MessageComponent know that there may be an update
                this.messagesSubject.next(this.messagesStore);

            }, error => {
                this.handleError("Unable to get the messages.");

            });
    }

    async postMessage(message) {
        try {
            // Convert the Observable to a Promise
            const response = await this.http.post(`${this.BASE_URL}/messages`, message).toPromise();

            this.messagesStore.push(response.json());
            this.messagesSubject.next(this.messagesStore);

        } catch(error) {
            this.handleError("Unable to post the message.");

        }
    }

    getUser() {
        return this.http.get(`${this.BASE_URL}/users/me`, this.auth.tokenHeader)
            .map(res => res.json());
    }

    saveUser(userData) {
        return this.http.post(`${this.BASE_URL}/users/me`, userData, this.auth.tokenHeader)
            .map(res => res.json());
    }

    private handleError(error) {
        this.snackBar.open(error, "close", {"duration": 2000});
    }
}