import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/Addons.js';

const renderer = new THREE.WebGLRenderer({antialias: true});
const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
const fov = 75;
const aspect = window.innerWidth/window.innerHeight;
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;

const scene = new THREE.Scene();

const radius = 1;

const geometry = new THREE.SphereGeometry(radius);

const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

function animate(t = 0) {
  sphere.rotation.y = t * 0.001
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();