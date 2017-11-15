/****************************************************************************

    Initialize

*****************************************************************************/
import React from "react";
import {
    Sphere, Box, Cylinder, Plane, View,
    AmbientLight, DirectionalLight, PointLight, SpotLight
} from "react-vr";


/****************************************************************************

    Create component

*****************************************************************************/
const PrimitivesLit = () => (
    <View>
        <AmbientLight
            intensity={.5}
            style={{
                "color": "green"
            }}
        />

        <PointLight
            intensity={.5}
            style={{
                "color"    : "blue",
                "transform": [
                    {
                        "translateY": 2
                    }
                ]
            }}
        />

        <DirectionalLight
            intensity={.5}
            style={{
                "color"    : "yellow",
                "transform": [
                    {
                        "rotateX": 45
                    }
                ]
            }}
        />

        <SpotLight
            angle={45}
            decay={2}
            distance={30}
            intensity={.5}
            penumbra={50}
            style={{
                "color"    : "orange",
                "transform": [
                    {
                        "translateZ": 2
                    }
                ]
            }}
        />

        <Box
            lit 
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
            lit
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
            lit
            style={{
                "transform": [
                    {
                        "translate": [0, 0, -3]
                    }
                ]
            }}
        />

        <Sphere
            lit
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
            lit
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
            lit
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

export default PrimitivesLit;