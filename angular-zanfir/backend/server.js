const express    = require("express");
const bodyParser = require("body-parser");
const jwt        = require("jsonwebtoken");

// Create an Express app
const app = express();


// Mock databases
let messages = [
    {
        "text" : "Some text",
        "owner": "Alicia"
    },
    {
        "text" : "Another text",
        "owner": "Bob"
    }
];

let users = [
    {
        "id"       : 0,
        "firstName": "a",
        "email"    : "a@a.com",
        "password" : "a"
    }
];


// Let Express know that the body is in JSON format
app.use(bodyParser.json());

// Use CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    next();
});

const api  = express.Router();
const auth = express.Router();


// Set API routes
api.get("/messages", (req, res) => {
    res.json(messages);
});

api.get("/messages/:user", (req, res) => {
    const user   = req.params.user;
    const result = messages.filter(message => message.owner === user);
    
    res.json(result);
});

api.post("/messages", (req, res) => {
    // Save the message
    messages.push(req.body);

    res.json(req.body);
});

api.get("/users/me", checkAuthenticated, (req, res) => {
    res.json(users[req.user]);
});

api.post("/users/me", checkAuthenticated, (req, res) => {
    const user = users[req.user];

    // Update the user
    user.firstName = req.body.firstName;
    user.lastName  = req.body.lastName;

    res.json(user);
});


// Set Auth routes
auth.post("/login", (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);

    // Find the user
    const user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
        sendAuthError(res);

    } else {
        sendToken(user, res);

    }
});

auth.post("/register", (req, res) => {
    // Create an index
    const user  = req.body;
    const index = users.push(user) - 1;

    user.id = index;

    sendToken(user, res);
});

function sendToken(user, res) {
    // Create a token
    const token = jwt.sign(user.id, "SECRET_MESSAGE");

    res.json({"firstName": user.firstName, token});
}

function sendAuthError(res) {
    res.json({
        "success": false,
        "message": "Email or password is incorrect."
    });
}

function checkAuthenticated(req, res, next) {
    if (!req.header("authorization")) {
        return res.status(401).send({
            "message": "Unauthorized request. Missing authentication header."
        });

    } else {
        // Separate the token from the bearer text
        const token = req.header("authorization").split(" ")[1];

        // Get the payload
        const payload = jwt.decode(token, "SECRET_MESSAGE");

        if (!payload) {
            return res.status(401).send({
                "message": "Unauthorized request. Invalid authentication header."
            });

        } else {
            req.user = payload;

            next();

        }

    }
}


app.use("/api", api);
app.use("/auth", auth);

app.listen(4201);