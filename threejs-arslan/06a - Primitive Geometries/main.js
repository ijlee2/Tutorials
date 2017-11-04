// Modeling is the process of changing a primitive geometry to the desired shape.
// This is achieved by manipulating the vertices, edges, and faces of a base geometry.
// Geometries in 3D consist of points called vertices, and lines that connect them,
// called edges. The faces of the geometry are made up of polygons that consist of
// two triangles.
const GEO_TYPES = [
    "box",
    "cone",
    "cylinder",
    "octahedron",
    "sphere",
    "tetrahedron",
    "torus",
    "torusKnot"
];

function init() {
    const scene = new THREE.Scene();
    const clock = new THREE.Clock();

    // Initialize objects
    const objectMaterial = getMaterial("standard", "rgb(255, 255, 255)");

    const geoTypes = GEO_TYPES;

    geoTypes.forEach(function(type) {
        const geometry = getGeometry(type, 5, objectMaterial);
        scene.add(geometry);
    });

    const lightLeft   = getSpotLight(1, "rgb(255, 220, 180)");
    const lightRight  = getSpotLight(1, "rgb(255, 220, 180)");
    const lightBottom = getSpotLight(0.33, "rgb(255, 220, 150)");

    lightLeft.position.x = -5;
    lightLeft.position.y =  2;
    lightLeft.position.z = -4;

    lightRight.position.x =  5;
    lightRight.position.y =  2;
    lightRight.position.z = -4;

    lightBottom.position.x = 0;
    lightBottom.position.y = 10;
    lightBottom.position.z = 0;

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

    // Manipulate materials
    const loader = new THREE.TextureLoader();
    objectMaterial.bumpMap      = loader.load("assets/textures/scratch.jpg");
    objectMaterial.bumpScale    = 0.01;
    objectMaterial.envMap       = reflectionCube;
    objectMaterial.metalness    = 0.7;
    objectMaterial.roughnessMap = loader.load("assets/textures/scratch.jpg");
    objectMaterial.roughness    = 0.5;

    const maps = ["bumpMap", "roughnessMap"];
    maps.forEach(function(map) {
        const texture = objectMaterial[map];
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });

    // Add objects to the scene
    scene.add(lightLeft);
    scene.add(lightRight);
    scene.add(lightBottom);

    // Camera
    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.x = 20;
    camera.position.y = 0;
    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const cameraGroup = new THREE.Group();
    cameraGroup.add(camera);
    cameraGroup.name = "sceneCameraGroup";
    scene.add(cameraGroup);

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
    document.getElementById("webgl").appendChild(renderer.domElement);
    
    update(renderer, scene, camera, clock);

    return scene;
}

function getGeometry(type, size, material) {
    const segmentMultiplier = 1;
    let   geometry;
    
    switch (type) {
        case "box":
            geometry = new THREE.BoxGeometry(size, size, size);
            break;

        case "cone":
            geometry = new THREE.ConeGeometry(size, size, 256 * segmentMultiplier);
            break;

        case "cylinder":
            geometry = new THREE.CylinderGeometry(size, size, size, 32 * segmentMultiplier);
            break;

        case "octahedron":
            geometry = new THREE.OctahedronGeometry(size);
            break;

        case "sphere":
            geometry = new THREE.SphereGeometry(size, 32 * segmentMultiplier, 32 * segmentMultiplier);
            break;

        case "tetrahedron":
            geometry = new THREE.TetrahedronGeometry(size);
            break;

        case "torus":
            geometry = new THREE.TorusGeometry(size / 2, size / 4, 16 * segmentMultiplier, 100 * segmentMultiplier);
            break;

        case "torusKnot":
            geometry = new THREE.TorusKnotGeometry(size / 2, size / 6, 256 * segmentMultiplier, 100 * segmentMultiplier);
            break;

        default:
            break;
    }

    const obj = new THREE.Mesh(geometry, material);
    obj.castShadow = true;
    obj.name       = type;

    return obj;
}

function getMaterial(type, color = "rgb(255, 255, 255)") {
    const materialOptions = {
        color,
        "wireframe": false
    };
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

function getPointLight(intensity, color) {
    const light = new THREE.PointLight(color, intensity);
    light.castShadow = true;

    return light;
}

function getSpotLight(intensity, color = "rgb(255, 255, 255)") {
    const light = new THREE.SpotLight(color, intensity);

    light.castShadow = true;
    light.penumbra   = 0.5;

    // Set the light's shadow properties
    light.shadow.mapSize.width  = 2048;  // default: 512
    light.shadow.mapSize.height = 2048;  // default: 512
    light.shadow.camera.near    = 0.1;   // default
    light.shadow.camera.far     = 500;   // default
    light.shadow.camera.fov     = 30;    // default
    light.shadow.bias           = 0.001;

    return light;
}

function update(renderer, scene, camera, clock) {
    // Rotate the camera about the origin
    const sceneCameraGroup = scene.getObjectByName("sceneCameraGroup");

    if (sceneCameraGroup) {
        sceneCameraGroup.rotation.y += 0.005;
    }

    // Switch between objects every 4 seconds
    const geoTypes = GEO_TYPES;

    let currentIndex = Math.floor(clock.getElapsedTime() / 4) % geoTypes.length;

    geoTypes.forEach((geometry, index) => {
        const currentObj = scene.getObjectByName(geometry);

        currentObj.visible = (index === currentIndex);
    })

    renderer.render(scene, camera);

    requestAnimationFrame(function() {
        update(renderer, scene, camera, clock);
    });
}

const scene = init();