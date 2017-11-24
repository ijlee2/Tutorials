// Import React
import React, { Component } from "react";
import { render } from "react-dom";

// Import CSS
import "../css/style.css";

// Import assets
import CommanderKeen from "../assets/keen.png";

export default class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello from React!</h1>

                <img src={CommanderKeen} alt="Commander Keen" />
            </div>
        );
    }
}

render(<Hello />, document.getElementById("app"));