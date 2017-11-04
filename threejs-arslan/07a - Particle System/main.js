// Particles simulate natural phenomena such as rain, snow, and dust. Using geometric
// objects to render particles is computationally expensive. Instead, Three.js allows
// us to create a geometry, populate the vertices with points, then pass the vertices
// to the Points function to create a particle system.
function init() {
    const scene = new THREE.Scene();

    // Set the geometry and material of the particle system
    const particleGeometry = new THREE.Geometry();
    const particleMaterial = new THREE.PointsMaterial({
        "color"       : "rgb(255, 255, 255)",
        "size"        : 1,
        "map"         : new THREE.TextureLoader().load("assets/textures/particle.jpg"),
        "transparency": true,
        "blending"    : THREE.AdditiveBlending,
        "depthWrite"  : false
    });

    // Create points that make up the particle system
    const particleCount    = 10000;
    const particleDistance = 100;

    // Create particles in the box [-50, 50] x [-50, 50] x [-50, 50]
    for (let i = 0; i < particleCount; i++) {
        const x = particleDistance * (Math.random() - 0.5);
        const y = particleDistance * (Math.random() - 0.5);
        const z = particleDistance * (Math.random() - 0.5);

        // Add particle to the particle system
        const particle = new THREE.Vector3(x, y, z);
        particleGeometry.vertices.push(particle);
    }

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
    camera.position.y = 1;
    camera.position.z = 0;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor("rgb(20, 20, 20");
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.getElementById("webgl").appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    update(renderer, scene, camera, controls);

    return scene;
}

function update(renderer, scene, camera, controls) {
    // Add animations
    const particleSystem = scene.getObjectByName("particleSystem");

    // To the whole system
    particleSystem.rotation.y += 0.005;

    // To each particle
    particleSystem.geometry.vertices.forEach(particle => {
        // Add bias so that particles move in the given direction
        particle.x += 0.1 * (Math.random() - 1);
        particle.y += 0.1 * (Math.random() - 0.75);
        particle.z += 0.1 * Math.random();

        // Provide a steady stream of particles
        if (particle.x < -50) particle.x =  50;
        if (particle.y < -50) particle.y =  50;
        if (particle.z < -50) particle.z =  50;
        if (particle.z >  50) particle.z = -50;
        
    });

    particleSystem.geometry.verticesNeedUpdate = true;

    renderer.render(scene, camera);
    controls.update();

    requestAnimationFrame(function() {
        update(renderer, scene, camera, controls);
    });
}

const scene = init();