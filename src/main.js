import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/Addons.js';

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
const renderer = new THREE.WebGLRenderer({ antialias: true });
const w = window.innerWidth;
const h = window.innerHeight;
const ballDX = -0.0001;
// const ballDZ = 0.0001;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
document.body.appendChild(labelRenderer.domElement);
const clock = new THREE.Clock();
let delta;
const shouldMove = false;
// force for jump
const impulseJump = new CANNON.Vec3(0, 6, 0);
// force for move right
const pX = new CANNON.Vec3(5, 0, 0);
const nX = new CANNON.Vec3(-5, 0, 0);
// zero force
const zeroV = new CANNON.Vec3(0, 0, 0);

const loader = new THREE.TextureLoader();
const texture = loader.load('resources/alien.jpg');
texture.colorSpace = THREE.SRGBColorSpace;

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 15; // Adjusted camera position

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0077ff); // Set background color

const world = new CANNON.World();
world.gravity.set(0, -12, 0);

class Ball {
  constructor(x, y, z, r) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;
  } 
  load() {
    this.geometry = new THREE.SphereGeometry(this.r, 20, 20);
    this.material = new THREE.MeshPhongMaterial(
      {
        color: 0x007755
      }
    );
    this.wire = new THREE.MeshPhongMaterial(
      {
        color: 0xffffff,
        wireframe: true,
      }
    );
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.wiredMesh = new THREE.Mesh(this.geometry, this.wire);
    this.wiredMesh.scale.setScalar(1.001);
    this.mesh.add(this.wiredMesh);
    this.mesh.position.x = this.x;
    this.mesh.position.y = this.y;
    this.mesh.position.z = this.z;
    this.mesh.rotateZ(THREE.MathUtils.degToRad(90));
    this.light = new THREE.DirectionalLight(0xffffff, 5);
    this.light.position.set(this.x, this.y+10, this.z + 5);
    // this.shape = new CANNON.Sphere(this.r);
    // this.body = new CANNON.Body({mass: 1});
    // this.body.addShape(this.shape);
    // this.body.position.copy(this.mesh.position);
  }
}

class Ground {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  load() {
    this.geometry = new THREE.PlaneGeometry(this.width, this.height);
    this.material = new THREE.MeshPhongMaterial({
      color: 0xff8899,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
    this.mesh.position.set(0, 0, 0);
    // this.shape = new CANNON.Plane();
    // this.body = new CANNON.Body({mass: 0});
    // this.body.addShape(this.shape);
    // this.body.position.copy(this.mesh.position);
  }
}

let player = new Ball(0, 50, 0, 1);
player.load();
scene.add(player.mesh, player.light);
const sphereShape = new CANNON.Sphere(player.r);
const sphereBody = new CANNON.Body({mass: 1});
sphereBody.addShape(sphereShape);
world.addBody(sphereBody);
sphereBody.position.set(player.x, player.y, player.z);

let ground = new Ground(15, 1000);
ground.load();
ground.mesh.rotateX(-Math.PI / 2)

ground.mesh.position.set(0, 0, 0);

scene.add(ground.mesh);

const planeShape = new CANNON.Plane();
const planeBody = new CANNON.Body({mass: 0});
planeBody.addShape(planeShape);
planeBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(planeBody);
camera.lookAt(
  player.mesh.position.x,
  player.mesh.position.y,
  player.mesh.position.z,
)

// text 

// const labelRenderer = new CSS2DRenderer();
// labelRenderer.setSize(window.innerWidth, window.innerHeight);
// labelRenderer.domElement.style.position = "absolute";
// document.body.appendChild(labelRenderer.domElement);
const instructions = document.createElement("div");
instructions.id = "ins";
instructions.innerHTML = "Press SPACE to jump over Red,<br>hit green to answer a question and<br>score a point<br><button style='background-color:green' onclick='start();'>Start</button>";
const objectInstructions = new CSS2DObject(instructions);

const innerScript = document.createElement("script");
innerScript.innerHTML = "function start() {document.getElementById(\"ins\").innerHTML = \"\";}"
const objectInnerScript = new CSS2DObject(innerScript);
// start button
player.mesh.add(objectInnerScript);

objectInstructions.position.set(
  player.mesh.position.x - 10,
  player.mesh.position.y + 10, 
  player.mesh.position.z - 10
);
ground.mesh.add(objectInstructions);

function animate(t = 0) {
  //document.body.innerHTML = sphereBody.position;
  requestAnimationFrame(animate);
  // player.mesh.rotation.x = t * -0.001;
  delta = Math.min(clock.getDelta(), 0.1)
  labelRenderer.render(scene, camera);
  camera.position.set(0, 5, player.mesh.position.z + 8);
  //camera.position.z = player.mesh.position.z + 10;
  //ground.mesh.rotation.x = t * 0.001;
  camera.lookAt(
    0,
    player.mesh.position.y,
    player.mesh.position.z
  );
  player.mesh.position.copy(sphereBody.position);
  //player.mesh.quaternion.copy(sphereBody.quaternion);
  player.mesh.rotation.x = t * -0.005;
  renderer.render(scene, camera);
  if (delta > 0) {
    world.step(delta);
  }
  objectInstructions.position.set(
    player.mesh.position.x - 500,
    player.mesh.position.y + 1000 + 50, 
    player.mesh.position.z
  );
}

animate();

document.addEventListener("keypress", jump, false);
// jump function
function jump(event) {
  if (event.which == 32) {
    if (player.mesh.position.y < 1.5) {
      sphereBody.applyImpulse(impulseJump);
    }
    
  }
}

document.addEventListener("keydown", carryMove, false);
// move functions

function carryMove(event) {
  if (event.which == 37) {
    sphereBody.velocity.set(-5, 0, 0);
  }
  if (event.which == 39) {
    sphereBody.velocity.set(5, 0, 0);
  }
}

// Handle window resize
window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    //labelRenderer.setSize(window.innerWidth, window.innerHeight);
});