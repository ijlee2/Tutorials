/****************************************************************************

    Initialize

*****************************************************************************/
import React, { Component } from "react";
import { View, Pano, Model, DirectionalLight, AmbientLight, Animated, asset } from "react-vr";

const AnimatedModel = Animated.createAnimatedComponent(Model);


/****************************************************************************

    Create component

*****************************************************************************/
class Models extends Component {
    state = {
        "distance": new Animated.Value(-3000),
        "rotation": new Animated.Value(180)
    };

    componentDidMount() {
        Animated
            .sequence([
                Animated.timing(this.state.distance, { "toValue":    -5, "duration": 10000 }),
                Animated.timing(this.state.rotation, { "toValue":     0, "duration": 10000 }),
                Animated.timing(this.state.distance, { "toValue": -3000, "duration": 10000 }),
            ])
            .start();
    }

    render() {
        return (
            <View>
                <Pano source={asset("city.png")} />
                <AmbientLight />
                <DirectionalLight intensity={.5} style={{
                    "color"    : "orange",
                    "transform": [
                        {
                            "rotateX": 45
                        },
                        {
                            "translate": [-10, 1000, -1000]
                        }
                    ]
                }} />
                <AnimatedModel
                    lit
                    source={{
                        "obj": asset("VulcanDkyr/VulcanDKyrClass.obj"),
                        "mtl": asset("VulcanDkyr/VulcanDKyrClass.mtl")
                    }}
                    style={{
                        "transform": [
                            {
                                "translateZ": this.state.distance
                            },
                            {
                                "translateY": this.state.distance.interpolate({
                                    "inputRange" : [-3000, -3],
                                    "outputRange": [ 1000, -0.5]
                                })
                            },
                            {
                                "translateX": this.state.distance.interpolate({ 
                                    "inputRange" : [-3000, -3],
                                    "outputRange": [ -300, 0]
                                })
                            },
                            {
                                "rotateY": this.state.rotation
                            }
                        ]
                    }}
                />
            </View>
        );
    }
}

export default Models;