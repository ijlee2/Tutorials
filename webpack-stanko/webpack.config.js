// Import Node's path package
const path = require("path");

const paths = {
    "SRC" : path.resolve(__dirname, "src"),
    "JS"  : path.resolve(__dirname, "src/js"),
    "DIST": path.resolve(__dirname, "dist")
};

// Webpack configuration
module.exports = {
    "entry"    : path.join(paths.JS, "app.js"),
    "devServer": {
        "contentBase": paths.SRC
    },
    "output"   : {
        "path"    : paths.DIST,
        "filename": "bundle.js"
    }
}