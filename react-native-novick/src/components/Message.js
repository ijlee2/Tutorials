/****************************************************************************

    Initialize

*****************************************************************************/
import React from "react";
import { View, StyleSheet, Text } from "react-native";


/****************************************************************************

    Create style

*****************************************************************************/
const styles = {
    "message": {
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
};


/****************************************************************************

    Create component

*****************************************************************************/
const Message = ({item}) => (
    <View style={[
        styles.message, item.incoming &&
        styles.incomingMessage
    ]}>
        <Text>{item.message}</Text>
    </View>
);

export default Message;