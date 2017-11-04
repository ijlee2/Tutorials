function init() {
    const scene = new THREE.Scene();
    const clock = new THREE.Clock();

    // Initialize objects
    const planeMaterial = getMaterial("basic", "rgb(255, 255, 255)");
    const plane         = getPlane(planeMaterial, 30, 60);
    plane.name = "plane-1";

    // Manipulate objects
    plane.rotation.x = Math.PI / 2;
    plane.rotation.z = Math.PI / 4;

    // Add objects to the scene
    scene.add(plane);

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

    update(renderer, scene, camera, controls, clock);

    return scene;
}

function getPlane(material, size, segments) {
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
    material.side = THREE.DoubleSide;

    const obj = new THREE.Mesh(geometry, material);
    obj.receiveShadow = true;
    obj.castShadow    = true;

    return obj;
}

function getMaterial(type, color = "rgb(255, 255, 255)") {
    const materialOptions = {
        color,
        "wireframe": true
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

function update(renderer, scene, camera, controls, clock) {
    const timeElapsed = clock.getElapsedTime();

    const plane         = scene.getObjectByName("plane-1");
    let   planeGeometry = plane.geometry;

    // Assign a random value to the y-position for each vertex
    planeGeometry.vertices.forEach((vertex, index) => {
        // We modify z-position instead due to rotation of the plane
        vertex.z = Math.sin(timeElapsed + 0.1 * index);
    });

    // Tell Three.js to update the vertices
    planeGeometry.verticesNeedUpdate = true;

    renderer.render(scene, camera);
    controls.update();

    requestAnimationFrame(function() {
        update(renderer, scene, camera, controls, clock);
    });
}

const scene = init();