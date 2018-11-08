//Step 1: Lets load the cube textures
var urlPrefix = "images/Bridge2/";
var urls = [ urlPrefix + "posx.jpg", urlPrefix + "negx.jpg",
    urlPrefix + "posy.jpg", urlPrefix + "negy.jpg",
    urlPrefix + "posz.jpg", urlPrefix + "negz.jpg" ];
var textureCube = THREE.ImageUtils.loadTextureCube( urls );


// Step 2: Lets init the shader


var shader = THREE.ShaderUtils.lib["cube"];
var uniforms = THREE.UniformsUtils.clone( shader.uniforms );
uniforms['tCube'].texture= textureCube;   // textureCube has been init before
var material = new THREE.MeshShaderMaterial({
    fragmentShader    : shader.fragmentShader,
    vertexShader  : shader.vertexShader,
    uniforms  : uniforms
});


//Step 3: Lets Create the Cube Itself

// build the skybox Mesh 
skyboxMesh    = new THREE.Mesh( new THREE.CubeGeometry( 100000, 100000, 100000, 1, 1, 1, null, true ), material );
// add it to the scene
scene.addObject( skyboxMesh );