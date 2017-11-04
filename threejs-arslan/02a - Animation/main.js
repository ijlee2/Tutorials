function init() {
    // Scene object is a container for all 3D objects that we create.
    // In other words, scene is the parent to all the objects.
    const scene = new THREE.Scene();

    // Create a box and a plane
    const box   = getBox(1, 1, 1);
    const plane = getPlane(4, 4);

    // Box is now a child of the plane. We can now transform the box and
    // plane at the same time.
    plane.add(box);
    scene.add(plane);

    // We can give objects a name so that we can later find them in the
    // scene (the object's parent) using getObjectByName method.
    plane.name = "plane-1";

    // Lay the plane on the ground (rotate by 90 degrees)
    plane.position.y = 1;
    plane.rotation.x = Math.PI / 2;

    // Place the box on top of the plane
    box.position.y = box.geometry.parameters.height / 2;

    // Create a camera to view the 3D world
    const camera = new THREE.PerspectiveCamera(
        45,                                      // field of view
        window.innerWidth / window.innerHeight,  // aspect ratio
        1,                                       // near clipping plane
        1000                                     // far clipping plane
    );

    // Move the camera so that we can see the box and plane
    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;

    // Tell the camera where to look
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Use a renderer to create a 2D image
    const renderer = new THREE.WebGLRenderer();

    // Set the size of the visual output
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Set where the renderer will display its results
    document.getElementById("webgl").appendChild(renderer.domElement);

    // Call the update function to continuously render the scene
    update(renderer, scene, camera);

    return scene;
}

// Create a rectangular box
function getBox(width, height, depth) {
    // Create the geometry and material
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshBasicMaterial({
        "color": 0x00ff00
    });

    // Create the mesh
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
}

// Create a plane
function getPlane(width, depth) {
    // Create the geometry and material
    const geometry = new THREE.PlaneGeometry(width, depth);
    const material = new THREE.MeshBasicMaterial({
        "color": 0xff0000,
        "side" : THREE.DoubleSide
    });

    // Create the mesh
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
}

function update(renderer, scene, camera) {
    renderer.render(scene, camera);

    // Get the plane
    const plane = scene.getObjectByName("plane-1");

    // Add animation
    plane.rotation.y += 0.001;
    plane.rotation.z += 0.001;

    // A traverse method performs the callback function to the object and
    // all of its descendants.
    scene.traverse(function(child) {
        child.scale.x += 0.001;
    });

    // requestAnimationFrame is a method on the window object. It performs
    // sorts and optimizations, such as when a frame should be painted, so
    // we prefer this over setInterval function. We use a callback function
    // to recursively call the update function at 60 fps.
    requestAnimationFrame(function() {
        update(renderer, scene, camera);
    });
}

// We can now type `scene` on the console to check its properties
const scene = init();