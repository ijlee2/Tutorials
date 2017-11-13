/****************************************************************************

    Initialize

*****************************************************************************/
import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";


/****************************************************************************

    Create component

*****************************************************************************/
const styles = StyleSheet.create({
    "container": {
        "backgroundColor": "#fff",
        "flex"           : 1,
        "alignItems"     : "center",
        "justifyContent" : "center"
    }
});

class ChatScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        "title": `Chat with ${navigation.state.params.user}`
    });

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}

export default ChatScreen;