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

    `npm i -D webpack-dev-server`

After configuring `package.json` to use `webpack-dev-server`, we can type

    `npm run dev`

and check our app on `http://localhost:8080`.


## HTML Webpack Plugin

We can use `html-webpack-plugin` to add `<script>` tags to our bundled app.

    `npm i -D html-webpack-plugin`


## Babel

Babel takes modern JavaScript and transpiles it (converts to an old version of JavaScript) so that it can be run in browsers that don't support modern standards.

We need a transpiler for two reasons: (1) React and JSX heavily rely on modern JavaScript features; (2) we *should* use modern JavaScript, since we can write code easier and better.

We will install 4 packages: Babel core package, Babel webpack loader, Babel env preset, and Babel React preset.

    `npm i -D babel-core babel-loader babel-preset-env babel-preset-react`