/****************************************************************************
 ****************************************************************************

    Initialize

*****************************************************************************
*****************************************************************************/
// Import packages
const express    = require("express");
const mongoose   = require("mongoose");
const morgan     = require("morgan");
const bodyParser = require("body-parser");
const config     = require("config");

const book       = require("./app/routes/book");

// Use Express
const app  = express();
const PORT = 3000;



/****************************************************************************
 ****************************************************************************

    Set models

*****************************************************************************
*****************************************************************************/
// Database options
const options = {
    "useMongoClient"  : true,
    "keepAlive"       : 1,
    "connectTimeoutMS": 30000
};

// Database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DBHost, options);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

// Don't display the log in test mode
if (config.util.getEnv("NODE_ENV") !== "test") {
    // Use Morgan to log to command line (combined creates Apache style logs)
    app.use(morgan("combined"));
}



/****************************************************************************
 ****************************************************************************

    Set views

*****************************************************************************
*****************************************************************************/
// Parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));
app.use(bodyParser.text());
app.use(bodyParser.json({"type": "application/json"}));



/****************************************************************************
 ****************************************************************************

    Set controllers

*****************************************************************************
*****************************************************************************/
app.get("/", (req, res) => {
    res.json({
        "message": "Welcome to our bookstore!"
    });
});

app.route("/book")
    .get(book.getBooks)
    .post(book.postBook);

app.route("/book/:id")
    .get(book.getBook)
    .delete(book.deleteBook)
    .put(book.updateBook);



/****************************************************************************
 ****************************************************************************

    Listen for connections on the port

*****************************************************************************
*****************************************************************************/
app.listen(PORT, () => console.log(`App listening on ${PORT}.`));

// Export the server for testing
module.exports = app;