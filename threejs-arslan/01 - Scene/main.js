function init() {
    // Scene object is a container for all 3D objects that we will create.
    // Think of a scene object as the 3D world that we will build.
    const scene = new THREE.Scene();

    // Create a box and a plane.
    const box   = getBox(1, 1, 1);
    const plane = getPlane(4, 4);

    // Lay the plane on the ground (rotate by 90 degrees).
    plane.rotation.x = Math.PI / 2;

    // Place the box on top of the plane.
    box.position.y = box.geometry.parameters.height / 2;

    scene.add(box);
    scene.add(plane);

    // Camera is the eyes with which we view the 3D world. A Three.js camera
    // requires several options during initialization, such as field of view,
    // aspect ratio, near clipping plane, and far clipping plane. Anything
    // beyond the clipping planes aren't rendered for optimization purposes.
    const camera = new THREE.PerspectiveCamera(
        45,                                      // field of view
        window.innerWidth / window.innerHeight,  // aspect ratio
        1,                                       // near clipping plane
        1000                                     // far clipping plane
    );

    // Move the camera so that we can see the box. Note, objects in Three.js
    // have 3 attributes called position, rotation, and scale. Each of these
    // attributes has 3 attributes x, y, and z.
    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;

    // Tell the camera where to look.
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Rendering is the process of converting 3D data into a 2D image. Three.js
    // comes with a few renderers (e.g. WebGL, Canvas, SVG). The Canvas and SVG
    // renderers use CPU instead of GPU, and do not support shadows and shaders.
    // In short, the end user experience with these renderers won't be so great.
    const renderer = new THREE.WebGLRenderer();

    // Set the size of the visual output
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Set where the renderer will display its results
    document.getElementById("webgl").appendChild(renderer.domElement);

    renderer.render(scene, camera);
}

function getBox(width, height, depth) {
    // A 3D object in Three.js consist of two parts: (1) a geometry that defines
    // the shape of the object, and (2) the material that defines surface quality
    // and appearance of the object.

    // Create a rectangular box with the specified width, height, and depth.
    const geometry = new THREE.BoxGeometry(width, height, depth);

    // The default material is called mesh basic material. It does not react to
    // the scene lighting.
    const material = new THREE.MeshBasicMaterial({
        "color": 0x00ff00  // Green
    });

    // Afterwards, create a mesh by combining the geometry and material.
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
}

function getPlane(width, depth) {
    // Create a plane with the specified width and depth.
    const geometry = new THREE.PlaneGeometry(width, depth);

    // The default material is called mesh basic material. It does not react to
    // the scene lighting.
    const material = new THREE.MeshBasicMaterial({
        "color": 0xff0000,         // Red
        "side" : THREE.DoubleSide  // Display both sides of the plane
    });

    // Afterwards, create a mesh by combining the geometry and material.
    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
}

init();