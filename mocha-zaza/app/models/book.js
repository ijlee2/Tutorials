const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the book schema
const BookSchema = new Schema(
    {
        "title"    : {"type": String, "required": true},
        "author"   : {"type": String, "required": true},
        "year"     : {"type": Number, "required": true},
        "pages"    : {"type": Number, "required": true, "min": 1},
        "createdAt": {"type": Date, "default": Date.now}
    },
    {
        "versionKey": false
    }
);

// Set createdAt to the current time
BookSchema.pre("save", next => {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }

    next();
});

// Export the schema
module.exports = mongoose.model("book", BookSchema);