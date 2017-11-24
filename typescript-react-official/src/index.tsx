/****************************************************************************

    Initialize

*****************************************************************************/
// Import React and Redux
import * as React    from "react";
import * as ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider }    from "react-redux";
import { enthusiasm }  from "./reducers";
import { StoreState }  from "./types";

const store = createStore<StoreState>(enthusiasm, {
    "languageName"   : "TypeScript",
    "enthusiasmLevel": 1
});

// Import containers
import Hello from "./containers/Hello";

// Progressive web app
import registerServiceWorker from "./registerServiceWorker";

// Import CSS
import "./index.css";


/****************************************************************************

    Create app

*****************************************************************************/
ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    // Using as (type assertion, or cast) allows us to tell TypeScript what
    // the return type of an expression is when we know better than the type
    // checker.
    // Here, getElementById can return null if it cannot find an element with
    // id called root. Since we know that this will not happen, we specify
    // that the return type will always be HTMLElement.
    document.getElementById("root") as HTMLElement
);

registerServiceWorker();