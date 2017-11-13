import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// Import the root reducer
import rootReducer from "./reducers/index";

// Default data for testing
import posts from "./data/posts";
import comments from "./data/comments";

// Create an object for the default data
const defaultState = {
    posts,
    comments
};

// Use Redux Dev Tools
const enhancers = compose(
    // If the devToolsExtension exists, run it. Otherwise, return the store
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// Allow hot reloading for reducers
if (module.hot) {
    module.hot.accept("./reducers", () => {
        // We use require instead of import because we are inside of a function
        const nextRootReducer = require("./reducers/index").default;

        // Replace the root reducer
        store.replaceReducer(nextRootReducer);

    });
}

export default store;