// Just like how a photographer uses an image editor such as Photoshop
// to enhance their photos, we can use pixel-processing algorithms
// called shaders to post-process our Three.js renders.
//
// A shader is a piece of code that describes how the GPU should render
// pixels on the screen. Shaders are written in a C-like language known
// as GLSL, but Three.js luckily provides example shaders.
// 
// EffectComposer allows us to add multiple effects to our scene. It
// relies on RenderPass, CopyShader, and ShaderPass.
// 
// The workflow is simple. We look at the JavaScript file to check the
// name of the shader and its parameters, then add the shader to the
// scene. The order of the shaders matters, so we may get a different
// result depending on the stack order. Finally, set the renderToScreen
// flag to true for the last effect in the stack, and add all effects
// to EffectComposer.
function init() {
    const scene = new THREE.Scene();
    const clock = new THREE.Clock();
    const gui   = new dat.GUI();

    // Add objects
    const plane = getPlane(50, 50);
    plane.name       = "plane-1";
    plane.rotation.x = Math.PI / 2;

    const boxGrid = getBoxGrid(20, 2.5);
    boxGrid.name = "boxGrid-1";

    const directionalLight = getDirectionalLight(1.5);
    directionalLight.position.x = 26;
    directionalLight.position.y = 20;
    directionalLight.position.z = 20;

    scene.add(plane);
    scene.add(boxGrid);
    scene.add(directionalLight);

    // Add fog
    const enableFog = false;

    if (enableFog) {
        scene.fog = new THREE.FogExp2("rgb(220, 220, 220)", 0.02);
    }

    // Camera
    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.x =  45;
    camera.position.y =  45;
    camera.position.z = -60;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor("rgb(220, 220, 220)");
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.getElementById("webgl").appendChild(renderer.domElement);

    // Add shaders
    const composer = new THREE.EffectComposer(renderer);
    
    // Set the renderToScreen flag to true for the last effect in the effects stack
    const renderPass = new THREE.RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Add vignette
    const vignetteEffect = new THREE.ShaderPass(THREE.VignetteShader);
    vignetteEffect.uniforms["darkness"].value = 2;
    composer.addPass(vignetteEffect);

    // Add RGB shift
    const rgbShiftShader = new THREE.ShaderPass(THREE.RGBShiftShader);
    rgbShiftShader.uniforms["amount"].value = 0.003;
    rgbShiftShader.renderToScreen = true;
    composer.addPass(rgbShiftShader);
    
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    update(composer, scene, camera, controls, clock);

    return scene;
}

function getPlane(width, depth) {
    const geometry = new THREE.PlaneGeometry(width, depth);
    const material = new THREE.MeshPhongMaterial({
        "color": "rgb(120, 120, 120)",
        "side" : THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;

    return mesh;
}

function getBox(width, height, depth) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshPhongMaterial({
        "color": "rgb(120, 120, 120)"
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;

    return mesh;
}

function getBoxGrid(amount, separationMultiplier) {
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

function getDirectionalLight(intensity) {
    const light = new THREE.DirectionalLight(0xffffff, intensity);

    // Add shadows
    light.castShadow = true;

    // Extend the field of view
    const shadowMapSize = 30;
    light.shadow.camera.top    =  shadowMapSize;
    light.shadow.camera.right  =  shadowMapSize;
    light.shadow.camera.bottom = -shadowMapSize;
    light.shadow.camera.left   = -shadowMapSize;

    // Change resolution
    light.shadow.mapSize.width  = 2048;
    light.shadow.mapSize.height = 2048;

    return light;
}

function update(renderer, scene, camera, controls, clock) {
    const timeElapsed = clock.getElapsedTime();

    // Add animations
    const boxGrid = scene.getObjectByName("boxGrid-1");

    boxGrid.children.forEach((box, index) => {
        box.scale.y    = noise.simplex2(timeElapsed + index, timeElapsed + index) + 1;
        box.position.y = box.geometry.parameters.height * (box.scale.y / 2);
    });
    
    renderer.render(scene, camera);
    controls.update();

    requestAnimationFrame(function() {
        update(renderer, scene, camera, controls, clock);
    });
}

const scene = init();