/****************************************************************************

    Initialize

*****************************************************************************/
import React from "react";
import { Sphere, Box, Cylinder, Plane, View } from "react-vr";


/****************************************************************************

    Create component

*****************************************************************************/
const Primitives = () => (
    <View>
        <Box
            wireframe 
            dimWidth={1}
            dimHeight={1}
            dimDepth={1}
            style={{
                "transform": [
                    {
                        "translate": [4, 0, -1]
                    }
                ]
            }}
        />

        <Plane
            wireframe
            dimWidth={1}
            dimHeight={1}
            style={{
                "transform": [
                    {
                        "translate": [2, 0, -2]
                    },
                    {
                        "rotateY": -30
                    },
                    {
                        "rotateX": -80
                    }
                ]
            }}
        />

        <Sphere
            wireframe
            style={{
                "transform": [
                    {
                        "translate": [0, 0, -3]
                    }
                ]
            }}
        />

        <Sphere
            wireframe
            radius={.7}
            widthSegments={20}
            heightSegments={12}
            style={{
                "transform": [
                    {
                        "translate": [-2, 0, -3]
                    }
                ]
            }}
        />

        <Cylinder
            wireframe
            radiusTop={0.5}
            radiusBottom={0.5}
            dimHeight={2}
            segments={12}
            style={{
                "transform": [
                    {
                        "translate": [-5, 0, -3]
                    }
                ]
            }}
        />

        <Cylinder
            wireframe
            radiusTop={0}
            radiusBottom={1}
            dimHeight={2}
            segments={12}
            style={{
                "transform": [
                    {
                        "translate": [-6, 0, -1]
                    }
                ]
            }}
        />
    </View>
);

export default Primitives;