import * as THREE from 'three';
import * as CANNON from 'cannon-es'

const renderer = new THREE.WebGLRenderer({ antialias: true });
const w = window.innerWidth;
const h = window.innerHeight;
const ballDX = -0.0001;
const ballDZ = 0.0001;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const clock = new THREE.Clock();
let delta;

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
world.gravity.set(0, -9.81, 0);

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

let ground = new Ground(20, 1000);
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
function animate() {
  //document.body.innerHTML = sphereBody.position;
  requestAnimationFrame(animate);
  // player.mesh.rotation.x = t * -0.001;
  delta = Math.min(clock.getDelta(), 0.1)
  
  camera.position.set(0, 5, player.mesh.position.z + 10);
  //camera.position.z = player.mesh.position.z + 10;
  //ground.mesh.rotation.x = t * 0.001;
  camera.lookAt(
    player.mesh.position.x,
    player.mesh.position.y,
    player.mesh.position.z
  );
  player.mesh.position.copy(sphereBody.position);
  player.mesh.quaternion.copy(sphereBody.quaternion);
  renderer.render(scene, camera);
  if (delta > 0) {
    world.step(delta);
  }
}



function onKeyDown(event) {
  let keycode = event.which;
  if (keycode == 38) {
    player.mesh.rotation.x += ballDX * 1000;
  }
}
document.addEventListener("keydown", onKeyDown, false);
animate();

// Handle window resize
window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
});