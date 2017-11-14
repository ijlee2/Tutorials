/****************************************************************************

    Initialize

*****************************************************************************/
import React, { Component } from "react";
import { StatusBar, Platform, StyleSheet, View } from "react-native";

import { StackNavigator } from "react-navigation";
import routes from "./src/config/routes";

import { initializeApi } from "./src/services/api";

const RootNavigator = StackNavigator(routes);

console.ignoredYellowBox = ["Remote debugger"];


/****************************************************************************

    Create style

*****************************************************************************/
const styles = StyleSheet.create({
    "app": {
        "flex"      : 1,
        "paddingTop": (Platform.OS === "ios") ? 0 : StatusBar.currentHeight
    }
});


/****************************************************************************

    Create component

*****************************************************************************/
class App extends Component {
    componentDidMount() {
        initializeApi();
    }
    
    render() {
        return (
            <View style={styles.app}>
                <RootNavigator />
            </View>
        );
    }
}

export default App;