import React, { Component } from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

// Import components
import HelloWorld    from "./app/HelloWorld";
// import RoowSwitcher  from "./app/RoomSwitcher";
// import Primitives    from "./app/Primitives";
// import PrimitivesLit from "./app/PrimitivesLit";
// import Models        from "./app/Models";

export default class WelcomeToVR extends Component {
    render() {
        return (
            <View>
                <HelloWorld />
                {/* <RoomSwitcher /> */}
                {/* <Primitives /> */}
                {/* <PrimitivesLit /> */}
                {/* <Models /> */}
            </View>
        );
    }
};

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);