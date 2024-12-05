import * as THREE from 'three';
import * as CANNON from 'cannon'

const renderer = new THREE.WebGLRenderer({ antialias: true });
const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const texture = loader.load('resources/alien.jpg');
texture.colorSpace = THREE.SRGBColorSpace;

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 10; // Adjusted camera position

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0077ff); // Set background color

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
      color: 0xffffff,
    });
    this.mesh = new THREE.mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
  }
}

let player = new Ball(0, 0, 0, 0.5);
player.load();
scene.add(player.mesh, player.light);
camera.position.y = 5;
camera.lookAt(
  player.mesh.position.x,
  player.mesh.position.y,
  player.mesh.position.z
)

function animate(t = 0) {
    player.mesh.rotation.x = t * -0.001;
    //camera.position.z = player.mesh.position.z + 10;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
});