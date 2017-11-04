function init() {
    // Scene object is a container for all 3D objects that we create
    const scene = new THREE.Scene();

    // Use dat.gui to create UIs
    const gui = new dat.GUI();

    // Keep track of time
    const clock = new THREE.Clock();

    // Create a fog to allow the scene to fade to a given color
    const enableFog = false;

    if (enableFog) {
        scene.fog = new THREE.FogExp2(0xffffff, 0.2);
    }

    // Create a plane
    const plane      = getPlane(30, 30);
    plane.name       = "plane-1";
    plane.rotation.x = Math.PI / 2;
    scene.add(plane);

    // Create a grid of boxes
    const boxGrid = getBoxGrid(10, 1.5);
    boxGrid.name  = "boxGrid";
    scene.add(boxGrid);

    // Create light
    const sphere           = getSphere(0.05);
    const directionalLight = getDirectionalLight(1);

    directionalLight.add(sphere);
    scene.add(directionalLight);

    // Move the light
    directionalLight.position.x = 13;
    directionalLight.position.y = 10;
    directionalLight.position.z = 10;
    directionalLight.intensity  = 2;

    // Add sliders
    gui.add(directionalLight.position, "x", 0, 20);
    gui.add(directionalLight.position, "y", 0, 20);
    gui.add(directionalLight.position, "z", 0, 20);
    gui.add(directionalLight, "intensity", 0, 10);

    // Create a camera to view the 3D world
    const camera = new THREE.PerspectiveCamera(
        45,                                      // field of view
        window.innerWidth / window.innerHeight,  // aspect ratio
        1,                                       // near clipping plane
        1000                                     // far clipping plane
    );

    // Move the camera so that we can see the box and plane
    camera.position.x = 10;
    camera.position.y = 18;
    camera.position.z = -18;

    // Tell the camera where to look
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Use a renderer to create a 2D image
    const renderer = new THREE.WebGLRenderer();

    // Add shadows
    renderer.shadowMap.enabled = true;

    // Set the size of the visual output
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Change the color of the background
    renderer.setClearColor("rgb(120, 120, 120)");

    // Set where the renderer will display its results
    document.getElementById("webgl").appendChild(renderer.domElement);

    // Create orbit controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Call the update function to continuously render the scene
    update(renderer, scene, camera, controls, clock);

    return scene;
}

// Create a plane
function getPlane(width, depth) {
    // Create the geometry and material
    const geometry = new THREE.PlaneGeometry(width, depth);
    const material = new THREE.MeshPhongMaterial({
        "color": "rgb(120, 120, 120)",
        "side" : THREE.DoubleSide
    });

    // Create the mesh
    const mesh = new THREE.Mesh(geometry, material);

    // Add shadows
    mesh.receiveShadow = true;

    return mesh;
}

// Create a rectangular box
function getBox(width, height, depth) {
    // Create the geometry and material
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshPhongMaterial({
        "color": "rgb(120, 120, 120)"
    });

    // Create the mesh
    const mesh = new THREE.Mesh(geometry, material);

    // Add shadows
    mesh.castShadow = true;

    return mesh;
}

function getBoxGrid(amount, separationMultiplier) {
    // Create a grid of boxes
    const group = new THREE.Group();

    for (let i = 0; i < amount; i++) {
        const obj = getBox(1, 1, 1);

        obj.position.x = i * separationMultiplier;
        obj.position.y = obj.geometry.parameters.height / 2;

        group.add(obj);

        for (let j = 1; j < amount; j++) {
            const obj = getBox(1, 1, 1);

            obj.position.x = i * separationMultiplier;
            obj.position.y = obj.geometry.parameters.height / 2;
            obj.position.z = j * separationMultiplier;

            group.add(obj);
        }
    }

    group.position.x = -(separationMultiplier * (amount - 1)) / 2;
    group.position.z = -(separationMultiplier * (amount - 1)) / 2;

    return group;
}

// Create a sphere
function getSphere(radius) {
    // We can indicate how smooth we want the surface to be by
    // providing width and height segment values.
    const geometry = new THREE.SphereGeometry(radius, 24, 24);
    const material = new THREE.MeshBasicMaterial({
        "color": 0xffffff
    });

    // Create the mesh
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
}

// Create a point light
function getPointLight(intensity) {
    const light = new THREE.PointLight(0xffffff, intensity);

    // Add shadows
    light.castShadow = true;

    return light;
}

// Create a spot light
function getSpotLight(intensity) {
    const light = new THREE.SpotLight(0xffffff, intensity);

    // Add shadows
    light.castShadow = true;

    // Add bias
    light.shadow.bias = 0.001;

    // Change resolution (default of 1024)
    light.shadow.mapSize.width  = 2048;
    light.shadow.mapSize.height = 2048;

    return light;
}

// Create a directional light
function getDirectionalLight(intensity) {
    const light = new THREE.DirectionalLight(0xffffff, intensity);

    // Add shadows
    light.castShadow = true;

    // Extend the field of view (default -5 to 5)
    light.shadow.camera.top    = 10;
    light.shadow.camera.right  = 10;
    light.shadow.camera.bottom = -10;
    light.shadow.camera.left   = -10;

    // Change resolution (default of 1024)
    light.shadow.mapSize.width  = 2048;
    light.shadow.mapSize.height = 2048;

    return light;
}

// Create an ambient light (ambient light is unrealistic, so use it sparingly!)
function getAmbientLight(intensity) {
    const light = new THREE.AmbientLight("rgb(10, 30, 50)", intensity);

    return light;
}

function update(renderer, scene, camera, controls, clock) {
    renderer.render(scene, camera);

    const timeElapsed = clock.getElapsedTime();

    // Animate the boxes in the boxGrid
    const boxGrid = scene.getObjectByName("boxGrid");

    boxGrid.children.forEach((child, index) => {
        const x = 2 * timeElapsed + index;

        // Use the Perlin noise function
        child.scale.y    = (noise.simplex2(x, x) + 1) / 2 + 0.001;
        child.position.y = child.scale.y / 2;
    });

    // Orbit controls
    controls.update();

    requestAnimationFrame(function() {
        update(renderer, scene, camera, controls, clock);
    });
}

// We can now type `scene` on the console to check its properties
const scene = init();