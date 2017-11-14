import * as firebase from "firebase";

export const initialize = () => firebase.initializeApp({
    "apiKey"           : "AIzaSyDaFZTtN5c2rWEAwomk0sz3JhpchVxDNYQ",
    "authDomain"       : "chatapp-ce598.firebaseapp.com",
    "databaseURL"      : "https://chatapp-ce598.firebaseio.com",
    "projectId"        : "chatapp-ce598",
    "storageBucket"    : "chatapp-ce598.appspot.com",
    "messagingSenderId": "681765993253"
});

export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on("value", updaterFn);

    return () => firebase.database().ref(endpoint).off();
};

export const pushData = (endpoint, data) => {
    return firebase.database().ref(endpoint).push(data);
};