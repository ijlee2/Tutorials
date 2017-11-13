import React from "react";

// Import just the render method from the react-dom package
import { render } from "react-dom";

// Import CSS - Webpack will do this for us
import css from "./styles/style.styl";

// Import components
import Main from "./components/Main";

render(<Main />, document.getElementById("root"));