/****************************************************************************

    Initialize

*****************************************************************************/
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";


/****************************************************************************

    Create component

*****************************************************************************/
const styles = StyleSheet.create({
    "container": {
        "backgroundColor": "#fff",
        "flex"           : 1,
        "alignItems"     : "center",
        "justifyContent" : "center"
    },
    "button": {
        "padding": 10
    }
});

class HomeScreen extends React.Component {
    static navigationOptions = {
        "title": "Welcome"
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to React Native workshop</Text>
                <Button 
                    style={styles.button}
                    title="Navigate to ChatScreen"
                    onPress={
                        () => this.props.navigation.navigate("chat", {"user": "John"})
                    }
                /> 
            </View>
        );
    }
}

export default HomeScreen;