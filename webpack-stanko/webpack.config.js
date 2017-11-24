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

    "plugins": [
        // Use html-webpack-plugin to write the script tag
        new HtmlWebpackPlugin({
            "template": path.join(paths.SRC, "index.html")
        }),

        // Use extract-text-webpack-plugin to write CSS to an external file
        new ExtractTextPlugin("bundle.css")
    ],

    "module": {
        "rules": [
            // Use babel-loader for .js and .jsx files
            {
                "test"   : /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use"    : ["babel-loader"]
            },

            // Use css-loader for .css files
            {
                "test": /\.css$/,
                "loader": ExtractTextPlugin.extract({
                    "use": "css-loader"
                })
            },

            // Use file-loader for asset files (images, SVGs, fonts, and videos)
            {
                "test": /\.(png|jpg|gif)$/,
                "use" : ["file-loader"]
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