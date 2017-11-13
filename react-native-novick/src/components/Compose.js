/****************************************************************************

    Initialize

*****************************************************************************/
import React, { Component } from "react";
import { View, StyleSheet, Keyboard, Button, TextInput } from "react-native";


/****************************************************************************

    Create style

*****************************************************************************/
const styles = StyleSheet.create({
    "composeText": {
        "backgroundColor"  : "white",
        "width"            : "80%",
        "height"           : 40,
        "paddingHorizontal": 10,
        "borderColor"      : "#979797",
        "borderStyle"      : "solid",
        "borderWidth"      : 1
    },
    
    "compose": {
        "margin"        : 10,
        "flexDirection" : "row",
        "alignItems"    : "center",
        "justifyContent": "space-between"
    }
});


/****************************************************************************

    Create component

*****************************************************************************/
class Compose extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "text": ""
        };

        this.submit = this.submit.bind(this);
    }

    submit() {
        this.props.submit(this.state.text);

        // Reset the field
        this.setState({
            text: ""
        });

        Keyboard.dismiss();
    }

    render() {
        return (
            <View style={styles.compose}>
                <TextInput
                    style={styles.composeText}
                    value={this.state.text}
                    onChangeText={text => this.setState({text})}
                    onSubmitEditing={this.submit}
                    editable={true}
                    maxLength={40}
                />

                <Button
                    onPress={this.submit}
                    title="Send"
                />
            </View>
        );
    }
}

export default Compose;