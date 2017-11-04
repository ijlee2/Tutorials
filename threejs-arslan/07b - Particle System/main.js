// Three.js also allows us to pass objects to the Points function. This will hide the
// edges and faces.
function init() {
    const scene = new THREE.Scene();
    const stats = new Stats();

    // Add stats
    document.body.appendChild(stats.dom);

    // Set the geometry and material of the particle system
    const particleGeometry = new THREE.SphereGeometry(10, 64, 64);
    const particleMaterial = new THREE.PointsMaterial({
        "color"       : "rgb(255, 255, 255)",
        "size"        : 0.25,
        "map"         : new THREE.TextureLoader().load("assets/textures/particle.jpg"),
        "transparency": true,
        "blending"    : THREE.AdditiveBlending,
        "depthWrite"  : false
    });

    particleGeometry.vertices.forEach(particle => {
        // Add randomness to the initial position
        particle.x += (Math.random() - 0.5);
        particle.y += (Math.random() - 0.5);
        particle.z += (Math.random() - 0.5);

    });

    // Display the particle system
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    particleSystem.name = "particleSystem";

    scene.add(particleSystem);

    // Camera
    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.x = 0;
    camera.position.y = 20;
    camera.position.z = 30;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor("rgb(20, 20, 20");
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.getElementById("webgl").appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    update(renderer, scene, camera, controls, stats);

    return scene;
}

function update(renderer, scene, camera, controls, stats) {
    // Add animations
    const particleSystem = scene.getObjectByName("particleSystem");

    // To the whole system
    particleSystem.rotation.y += 0.005;

    renderer.render(scene, camera);
    controls.update();
    stats.update();

    requestAnimationFrame(function() {
        update(renderer, scene, camera, controls, stats);
    });
}

const scene = init();