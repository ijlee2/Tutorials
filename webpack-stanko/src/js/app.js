// Import React
import React, { Component } from "react";
import { render } from "react-dom";

// Import CSS
import "../css/style.css";

export default class Hello extends Component {
    render() {
        return (
            <h1>Hello from React!</h1>
        );
    }
}

render(<Hello />, document.getElementById("app"));