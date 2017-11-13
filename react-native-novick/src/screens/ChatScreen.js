/****************************************************************************

    Initialize

*****************************************************************************/
import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Button, FlatList } from "react-native";

// Get mock data
import { getMockData } from "../services/api";

const backgroundImage = require("../assets/imgs/background.png");


/****************************************************************************

    Create style

*****************************************************************************/
const styles = StyleSheet.create({
    "container": {
        "backgroundColor": "transparent",
        "flex"           : 1,
        "width"          : "100%"
    },

    "listItem": {
        "backgroundColor": "white",
        "width"          : "70%",
        "margin"         : 10,
        "borderColor"    : "#979797",
        "borderStyle"    : "solid",
        "borderWidth"    : 1,
        "borderRadius"   : 10,
        "padding"        : 10
    },

    "incomingMessage": {
        "backgroundColor": "#e1ffc7",
        "alignSelf"      : "flex-end"
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
                <FlatList
                    data={this.state.messages}
                    renderItem={({item}) => this.getMessageRow(item)}
                    keyExtractor={(item, index) => (`message-${index}`)}
                />
            </ImageBackground>
        );
    }
}

export default ChatScreen;