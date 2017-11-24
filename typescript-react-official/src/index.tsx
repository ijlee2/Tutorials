/****************************************************************************

    Initialize

*****************************************************************************/
// Import React
import * as React    from "react";
import * as ReactDOM from "react-dom";

// Import components
import Hello from "./components/Hello";

// Progressive web app
import registerServiceWorker from "./registerServiceWorker";

// Import CSS
import "./index.css";


/****************************************************************************

    Create app

*****************************************************************************/
ReactDOM.render(
    <Hello name="TypeScript" enthusiasmLevel={10} />,
    // Using as (type assertion, or cast) allows us to tell TypeScript what
    // the return type of an expression is when we know better than the type
    // checker.
    // Here, getElementById can return null if it cannot find an element with
    // id called root. Since we know that this will not happen, we specify
    // that the return type will always be HTMLElement.
    document.getElementById("root") as HTMLElement
);

registerServiceWorker();