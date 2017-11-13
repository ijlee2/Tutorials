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

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;