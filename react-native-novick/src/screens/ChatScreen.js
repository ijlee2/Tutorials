/****************************************************************************

    Initialize

*****************************************************************************/
import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    ImageBackground,
    Button,
    FlatList
} from "react-native";

// Import components
import { Message, Compose } from "../components";

// Import API methods
import { getMockData, postMessage } from "../services/api";

const backgroundImage = require("../assets/imgs/background.png");


/****************************************************************************

    Create style

*****************************************************************************/
const styles = StyleSheet.create({
    "container": {
        "backgroundColor": "transparent",
        "flex"           : 1,
        "width"          : "100%"
    }
});


/****************************************************************************

    Create component

*****************************************************************************/
class ChatScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        "title": `Chat with ${navigation.state.params.user}`
    });

    state = {
        "messages": []
    };

    keyboardVerticalOffset = (Platform.OS === "ios") ? 60 : 0;

    componentDidMount() {
        // Load initial conversation
        getMockData()
            .then(messages => {
                this.setState({messages});

            });
    }

    getMessageRow(item) {
        return (
            <View Style={[
                styles.listItem,
                (item.incoming) ? styles.incomingMessage : styles.outgoingMessage
            ]}>
                <Text>{item.message}</Text>
            </View>
        );
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={backgroundImage}>
                <KeyboardAvoidingView
                    behavior="padding"
                    keyboardVerticalOffset={this.keyboardVerticalOffset}
                    style={styles.container}
                >
                    <FlatList
                        data={this.state.messages}
                        renderItem={Message}
                        keyExtractor={(item, index) => (`message-${index}`)}
                        style={styles.container}
                    />

                    <Compose submit={postMessage} />
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}

export default ChatScreen;