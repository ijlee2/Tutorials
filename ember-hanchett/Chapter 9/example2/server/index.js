/* eslint-env node */
"use strict";

const bodyParser = require("body-parser");

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({"extended": true}));

    app.get("/api/students", (req, res) => {
        if (req.headers.authorization !== "Bearer secretcode") {
            return res.status(401).send("Unauthorized");
        }

        // Format for JSONAPIAdapter
        return res.status(200).send({
            "data": [
                {
                    "type": "students",
                    "id": 1,
                    "attributes": {
                        "name": "Erik",
                        "age": 24
                    }
                },
                {
                    "type": "students",
                    "id": 2,
                    "attributes": {
                        "name": "Suze",
                        "age": 32
                    }
                },
                {
                    "type": "students",
                    "id": 3,
                    "attributes": {
                        "name": "Jill",
                        "age": 18
                    }
                }
            ]
        });

        // Format for RESTAdapter
        /*
        return res.status(200).send({
            "students": [
                {
                    "id": 1,
                    "name": "Erik",
                    "age": 24
                },
                {
                    "id": 2,
                    "name": "Suze",
                    "age": 32
                },
                {
                    "id": 3,
                    "name": "Jill",
                    "age": 18
                }
            ]
        });
        */
    });

    app.post("/token", (req, res) => {
        const {username, password} = req.body;

        if (username === "erik" && password === "password") {
            res.send({
                "access_token": "secretcode"
            });

        } else {
            res.status(400).send({
                "error": "invalid_grant"
            });

        }
    });
};
