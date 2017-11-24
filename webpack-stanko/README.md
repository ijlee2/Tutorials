# Setting Up Webpack, Babel, and React from Scratch

[Tutorial by Stanko Tadic](https://stanko.github.io/webpack-babel-react-revisited/)


## Webpack

Webpack is used for module bundling. It transpiles and bundles our JavaScript files, compiles SASS or PostCSS, optimizes images, etc. Type the following to install webpack:

    `npm i -D webpack`

We can run webpack from the terminal as follows:

    `./node_modules/webpack/bin/webpack.js ./src/js/app.js --output-filename ./dist/bundle.js`

If a configuration file named `webpack.config.js` exists, we can simply run,

    `./node_modules/webpack/bin/webpack.js`

or with `package.json` modified to run the build script,

    `npm run build`


## Webpack Dev Server

We need a server to open our application in a browser. Webpack provides a dev server so that we can serve our files and use hot module reload.

After configuring `package.json` to use `webpack-dev-server`, we can type

    `npm run dev`

and check our app on `http://localhost:8080`.