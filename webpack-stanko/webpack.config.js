// Import packages
const path              = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Set paths
const paths = {
    "SRC" : path.resolve(__dirname, "src"),
    "JS"  : path.resolve(__dirname, "src/js"),
    "DIST": path.resolve(__dirname, "dist")
};

// Webpack configuration
module.exports = {
    "entry": path.join(paths.JS, "app.js"),

// No longer needed, since we now use html-webpack-plugin
//  "devServer": {
//      "contentBase": paths.SRC
//  },
    
    "output": {
        "path"    : paths.DIST,
        "filename": "bundle.js"
    },

    // Tell webpack to use html-webpack-plugin
    "plugins": [
        new HtmlWebpackPlugin({
            "template": path.join(paths.SRC, "index.html")
        }),

        new ExtractTextPlugin("bundle.css")
    ],

    // Tell webpack to use babel-loader for .js and .jsx files
    "module": {
        "rules": [
            {
                "test"   : /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use"    : ["babel-loader"]
            },

            {
                "test": /\.css$/,
                "loader": ExtractTextPlugin.extract({
                    "use": "css-loader"
                })
            }
        ]
    },

    // Allow importing JS files without writing their extension
    // For example, we can write `import Component from "./Component";`
    // instead of `import Component from "./Component.jsx";`.
    "resolve": {
        "extensions": [".js", ".jsx"]
    }
};