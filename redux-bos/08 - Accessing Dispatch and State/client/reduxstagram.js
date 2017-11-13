import React from "react";

// Import just the render method from the react-dom package
import {render} from "react-dom";

// Import CSS - Webpack will do this for us
import css from "./styles/style.styl";

// Import components
import App from "./components/App";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";

// Import React Router
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {Provider} from "react-redux";
import store, {history} from "./store";

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                // Depending on the URL structure, pass PhotoGrid or Single as a child of Main
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById("root"));