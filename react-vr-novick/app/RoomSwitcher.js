/****************************************************************************

    Initialize

*****************************************************************************/
import React, { Component } from "react";
import { View, Pano, Text, Image, asset } from "react-vr";


/****************************************************************************

    Create style

*****************************************************************************/
const styles = {
    "title": {
        "backgroundColor"  : "rgba(0, 0, 0, 0.4)",
        "color"            : "white",
        "fontSize"         : 0.3,
        "fontWeight"       : "400",
        "layoutOrigin"     : [0.5, 0.5],
        "paddingLeft"      : 0.2,
        "paddingRight"     : 0.2,
        "textAlign"        : "center",
        "textAlignVertical": "center",
        "transform"        : [
            {
                "translate": [0, .5, -3]
            }
        ]
    },

    "imageContainer": {
        "height"       : 1,
        "flexDirection": "row",
        "layoutOrigin" : [0.5, 0.5],
        "transform"    : [
            {
                "translate": [0, 0, -3]
            }
        ]
    },

    "image": {
        "width" : 1,
        "height": 1
    },

    "leftImage": {
        "transform": [
            {
                "rotateY": 20
            },
            {
                "translate": [-0.2, 0, 0]
            }
        ]
    },

    "rightImage": {
        "transform": [
            {
                "rotateY": -20
            },
            {
                "translate": [0.2, 0, 0]
            }
        ]
    }
};


/****************************************************************************

    Create component

*****************************************************************************/
class RoomSwitcher extends Component {
    state = {
        "roomImage": "holodeck.jpg"
    };

    changeRoom = roomImage => event => {
        if (event.nativeEvent.inputEvent.eventType === "click") {
            this.setState({
                roomImage
            });
        }
    };

    render() {
        return (
            <View>
                <Pano source={asset(this.state.roomImage)} />

                <Text style={styles.title}>
                    Choose your room.
                </Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={[styles.image, styles.leftImage]}
                        source={asset("holodeck.jpg")} 
                        onInput={this.changeRoom("holodeck.jpg")}
                    />

                    <Image
                        style={[styles.image, {
                            "transform": [
                                {
                                    "translateZ": -0.2
                                }
                            ]
                        }]}
                        source={asset("singapore.jpg")}
                        onInput={this.changeRoom("singapore.jpg")}
                    />

                    <Image 
                        style={[styles.image, styles.rightImage]}
                        source={asset("3droom.jpg")} 
                        onInput={this.changeRoom("3droom.jpg")}
                    />
                </View>
            </View>
        );
    }
};

export default RoomSwitcher;