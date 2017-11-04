// 3D modeling is a field that concerns with creating advanced 3D shapes. Some
// well-known 3D modleing software include Blender, Maya, Modo, 3ds Max, and
// Houdini. Online repositories for 3D models include TurboSquid, Sketchfab,
// and Clara.io.
// 
// Using third-party geometries not only saves us from having to create our own
// geometry, it also saves us from having to perform UV mapping. In UV mapping,
// we define how big we want a 2D texture to map on a 3D surface.
function init() {
    const scene = new THREE.Scene();
    const gui   = new dat.GUI();

    // Initialize objects
    const lightLeft  = getSpotLight(0.4, "rgb(255, 220, 180)");
    const lightRight = getSpotLight(1.25, "rgb(255, 220, 180)");

    lightLeft.position.x = 6;
    lightLeft.position.y = 8;
    lightLeft.position.z = 12;

    lightRight.position.x = 50;
    lightRight.position.y = 14;
    lightRight.position.z = -6;

    scene.add(lightLeft);
    scene.add(lightRight);

    // dat.gui
    gui.add(lightLeft, "intensity", 0, 10);
    gui.add(lightLeft.position, "x", -50, 50);
    gui.add(lightLeft.position, "y", -50, 50);
    gui.add(lightLeft.position, "z", -50, 50);

    gui.add(lightRight, "intensity", 0, 10);
    gui.add(lightRight.position, "x", -50, 50);
    gui.add(lightRight.position, "y", -50, 50);
    gui.add(lightRight.position, "z", -50, 50);

    // Load external geometry
    const loader        = new THREE.OBJLoader();
    const textureLoader = new THREE.TextureLoader();

    loader.load("/assets/models/head/lee-perry-smith-head-scan.obj", function(object) {
        const faceMaterial = getMaterial("standard", "rgb(255, 255, 255)");
        const colorMap     = textureLoader.load("/assets/models/head/Face_Color.jpg");
        const bumpMap      = textureLoader.load("/assets/models/head/Face_Disp.jpg");

        object.traverse(function(child) {
            if (child.name === "Plane") {
                child.visible = false;
            }

            if (child.name === "Infinite") {
                child.material = faceMaterial;
                faceMaterial.map          = colorMap;
                faceMaterial.bumpMap      = bumpMap;
                faceMaterial.bumpScale    = 0.175;
                faceMaterial.metalness    = 0;
                faceMaterial.roughnessMap = bumpMap;
                faceMaterial.roughness    = 0.875;
            }

        });

        object.scale.x = 20;
        object.scale.y = 20;
        object.scale.z = 20;

        object.position.y = -2;
        object.position.z = 0;
        
        scene.add(object);
    });

    // Load the environment map
    const path = "/assets/cubemap";
    const urls = [
        `${path}/px.jpg`,
        `${path}/nx.jpg`,
        `${path}/py.jpg`,
        `${path}/ny.jpg`,
        `${path}/pz.jpg`,
        `${path}/nz.jpg`
    ];

    const reflectionCube = new THREE.CubeTextureLoader().load(urls);
    scene.background = reflectionCube;

    // Camera
    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.x = 0;
    camera.position.y = 5;
    camera.position.z = 20;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.getElementById("webgl").appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    update(renderer, scene, camera, controls);

    return scene;
}

function getMaterial(type, color = "rgb(255, 255, 255)") {
    const materialOptions = {color};
    let   selectedMaterial;
    
    switch (type) {
        case "basic":
            selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
            break;

        case "lambert":
            selectedMaterial = new THREE.MeshLambertMaterial(materialOptions);
            break;

        case "phong":
            selectedMaterial = new THREE.MeshPhongMaterial(materialOptions);
            break;

        case "standard":
            selectedMaterial = new THREE.MeshStandardMaterial(materialOptions);
            break;

        default: 
            selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
            break;

    }

    return selectedMaterial;
}

function getSpotLight(intensity, color = "rgb(255, 255, 255)") {
    const light = new THREE.SpotLight(color, intensity);

    light.castShadow = true;
    light.penumbra   = 0.5;

    // Set the light's shadow properties
    light.shadow.mapSize.width  = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.bias           = 0.001;

    return light;
}

function update(renderer, scene, camera, controls) {
    renderer.render(scene, camera);
    controls.update();

    requestAnimationFrame(function() {
        update(renderer, scene, camera, controls);
    });
}

const scene = init();