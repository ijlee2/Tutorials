// Import packages
const path              = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Set paths
const paths = {
    "SRC" : path.resolve(__dirname, "src"),
    "JS"  : path.resolve(__dirname, "src/js"),
    "DIST": path.resolve(__dirname, "dist")
};

// Webpack configuration
module.exports = {
    "entry"    : path.join(paths.JS, "app.js"),

// No longer needed, since we now use html-webpack-plugin
//  "devServer": {
//      "contentBase": paths.SRC
//  },
    
    "output"   : {
        "path"    : paths.DIST,
        "filename": "bundle.js"
    },

    "plugins": [
        new HtmlWebpackPlugin({
            "template": path.join(paths.SRC, "index.html")
        })
    ]
}