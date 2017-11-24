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
    document.getElementById("root") as HTMLElement
);

registerServiceWorker();