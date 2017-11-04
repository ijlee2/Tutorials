function init() {
    const scene = new THREE.Scene();
    const gui   = new dat.GUI();

    // Initialize objects
    const sphereMaterial = getMaterial("standard", "rgb(255, 255, 255)");
    const sphere         = getSphere(sphereMaterial, 1, 24);

    const planeMaterial = getMaterial("standard", "rgb(255, 255, 255)");
    const plane         = getPlane(planeMaterial, 300);

    const lightLeft  = getSpotLight(1, "rgb(255, 220, 180)");
    const lightRight = getSpotLight(1, "rgb(255, 220, 180)");

    // Manipulate objects
    sphere.position.y = sphere.geometry.parameters.radius;
    plane.rotation.x  = Math.PI / 2;

    lightLeft.position.x = -5;
    lightLeft.position.y =  2;
    lightLeft.position.z = -4;

    lightRight.position.x =  5;
    lightRight.position.y =  2;
    lightRight.position.z = -4;

    // Manipulate materials
    // Load the cube map
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
    reflectionCube.format = THREE.RGBFormat;

    // Create a background
    scene.background = reflectionCube;

    const loader = new THREE.TextureLoader();

    // Texture maps are 2D images that provide surface detail. They can be used
    // to describe the quality of the surface, such as reflectiveness, shininess,
    // and roughness.
    planeMaterial.map = loader.load("assets/textures/concrete.jpg");

    // Bump maps simulate height using the brightness value. The brighter a pixel,
    // the higher the corresponding surface looks. Bump maps don't actually change
    // the surface, but instead, manipulates how light interacts with the surface
    // to create the illusion of an uneven topology.
    planeMaterial.bumpMap   = loader.load("assets/textures/concrete.jpg");
    planeMaterial.bumpScale = 0.01;

    // Roughness maps define the sharpness of reflection using the brightness value.
    // The brighter a pixel, the more blurry the reflection looks.
    planeMaterial.roughnessMap = loader.load("assets/textures/concrete.jpg");

    // Environment maps simulate how distant environment can reflect on the surface.
    planeMaterial.envMap       = reflectionCube;

    planeMaterial.metalness = 0.1;
    planeMaterial.roughness = 0.7;

    const maps = ["map", "bumpMap", "roughnessMap"];
    maps.forEach(function(mapName) {
        const texture = planeMaterial[mapName];
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(15, 15);
    });

    sphereMaterial.roughnessMap = loader.load("assets/textures/fingerprints.jpg");
    sphereMaterial.envMap       = reflectionCube;

    // dat.gui
    const folder1 = gui.addFolder("light_1");
    folder1.add(lightLeft, "intensity", 0, 10);
    folder1.add(lightLeft.position, "x", -5, 15);
    folder1.add(lightLeft.position, "y", -5, 15);
    folder1.add(lightLeft.position, "z", -5, 15);

    const folder2 = gui.addFolder("light_2");
    folder2.add(lightRight, "intensity", 0, 10);
    folder2.add(lightRight.position, "x", -5, 15);
    folder2.add(lightRight.position, "y", -5, 15);
    folder2.add(lightRight.position, "z", -5, 15);

    const folder3 = gui.addFolder("materials");
    folder3.add(sphereMaterial, "roughness", 0, 1);
    folder3.add(planeMaterial, "roughness", 0, 1);
    folder3.add(sphereMaterial, "metalness", 0, 1);
    folder3.add(planeMaterial, "metalness", 0, 1);
    folder3.open();

    // Add objects to the scene
    scene.add(sphere);
    scene.add(plane);
    scene.add(lightLeft);
    scene.add(lightRight);

    // Camera
    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.x = -2;
    camera.position.y =  7;
    camera.position.z =  7;
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

function getSphere(material, size, segments) {
    const geometry = new THREE.SphereGeometry(size, segments, segments);
    const object   = new THREE.Mesh(geometry, material);

    object.castShadow = true;

    return object;
}

function getMaterial(type, color = "rgb(255, 255, 255)") {
    const materialOptions = {color};
    let   selectedMaterial;
    
    switch (type) {
        // Basic material is unaffected by lighting, so it always displays
        // the given color. It can be useful for giving an object a soft,
        // illuminated look and make the object look like a light source.
        case "basic":
            selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
            break;

        // Lambert material is good for nice, shiny surfaces, such as rubber,
        // clay, and stone. Because it uses a simple model, Lambert material
        // is efficient but may not yield accurate results.
        case "lambert":
            selectedMaterial = new THREE.MeshLambertMaterial(materialOptions);
            break;

        // Phong material lets us control the highlights on the material. It
        // has an attribute called shininess that describes how sharply light
        // reflects on the material.
        // The higher the shininess, the sharper the reflections. Low values
        // can simulate rough surfaces (e.g. rubber), while high values can
        // simulate glossy surfaces (e.g. metal).
        case "phong":
            selectedMaterial = new THREE.MeshPhongMaterial(materialOptions);
            break;

        // Standard material is a physically-based material that creates much
        // more realistic results. It is the industry standard in gaming and
        // VFX. It is computationally more expensive to use this material.
        // Standard material has two attributes: roughness and metalness.
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
    light.shadow.mapSize.width  = 2048;  // default: 512
    light.shadow.mapSize.height = 2048;  // default: 512
    light.shadow.bias           = 0.001;

    return light;
}

function getPlane(material, size) {
    const geometry = new THREE.PlaneGeometry(size, size);
    const object   = new THREE.Mesh(geometry, material);
    
    material.side = THREE.DoubleSide;
    object.receiveShadow = true;

    return object;
}

function update(renderer, scene, camera, controls) {
    controls.update();
    renderer.render(scene, camera);

    requestAnimationFrame(function() {
        update(renderer, scene, camera, controls);
    });
}

const scene = init();