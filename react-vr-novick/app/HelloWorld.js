/****************************************************************************

    Initialize

*****************************************************************************/
import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";


/****************************************************************************

    Create component

*****************************************************************************/
const HelloWorld = () => (
    <View>
        <Pano source={asset("chess-world.jpg")}/>
        <Text style={{
            "backgroundColor"  : "rgba(0, 0, 0, 0.4)",
            "color"            : "white",
            "fontSize"         : 0.3,
            "fontWeight"       : "400",
            "layoutOrigin"     : [0.5, 0.5],
            "paddingLeft"      : 1,
            "paddingRight"     : 1,
            "textAlign"        : "center",
            "textAlignVertical": "center",
            "transform"        : [{"translate": [0, 0.5, -3]}]
        }}>
            Hello world!
        </Text>
    </View>
);

export default HelloWorld;