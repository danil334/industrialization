import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/Addons.js';
import { putQ, submitA } from './quizhandler.js'

document.createElement("div").id = "ins";
document.getElementById("ins").innerHTML = "<div style='background-color: white; padding: 15px; border-radius: 30px'>Press SPACE to jump<br>when red zone appears<br>to answer question correctly to earn points.</div><br><button style='background-color:green; border-radius: 30px; padding: 10px;' id=\"startGame\">Start</button>";

let qNumber = 1;
let score = 0;
const fixedTimeStep = 1.0/60.0;
let accumulator = 0;
let paused = false;
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
const renderer = new THREE.WebGLRenderer({ antialias: true });
const w = window.innerWidth;
const h = window.innerHeight;
// const ballDZ = 0.0001;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
document.body.appendChild(labelRenderer.domElement);
const clock = new THREE.Clock();
let delta;
// force for jump
const impulseJump = new CANNON.Vec3(0, 8, 0);

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
world.gravity.set(0, -9.8, 0);

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
      color: 0xff8899
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
ground.mesh.rotateX(-Math.PI / 2);
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
// Scoring Zone

class EZone {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  load() {
    this.geometry = new THREE.PlaneGeometry(this.width, this.height);
    this.material = new THREE.MeshPhongMaterial({
      color: 0xaa0033
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
    this.mesh.position.set(0, 0, 0);
  }
}

let zone = new EZone(15, 2);
zone.load();
zone.mesh.rotateX(-Math.PI / 2);
zone.mesh.position.set(0, 0, 0);
zone.mesh.visible = false;
scene.add(zone.mesh);
const zoneShape = new CANNON.Plane();
const zoneBody = new CANNON.Body({mass: 0})
zoneBody.addShape(zoneShape);
zoneBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(zoneBody);

// QUIZ
//document.getElementById("quiz").setAttribute("visibility", "visible");
let quiz = document.getElementById("quiz");
let objectQuiz = new CSS2DObject(quiz);
objectQuiz.position.set(
  0,
  8,
  0
);
ground.mesh.add(objectQuiz);
// GAME INSTRUCTIONS
let instructions = document.getElementById("ins");
let objectInstructions = new CSS2DObject(instructions);
objectInstructions.position.set(
  player.mesh.position.x - 10,
  player.mesh.position.y + 10,
  player.mesh.position.z - 10
);
ground.mesh.add(objectInstructions);

let sc = document.getElementById("score");
let objectScore = new CSS2DObject(sc);
objectScore.position.set(
  10,
  0,
  0
)
ground.mesh.add(objectScore);

var axis = new CANNON.Vec3(0, 0, 1);
var angle = Math.PI/2;
sphereBody.quaternion.setFromAxisAngle(axis, angle);
// check if game has started
let started = document.getElementById(instructions.id).innerHTML == "";
// ball movements
let stopped = false;
// let stopped = false;
function animate(t = 0) {
  requestAnimationFrame(animate);
  document.getElementById("score").innerHTML = "SCORE: " + score;
  //document.body.innerHTML = sphereBody.position;
  objectQuiz.visible = paused;
  if (!paused) {
    // player.mesh.rotation.x = t * -0.001;
    delta = Math.min(clock.getDelta(), 0.1);
    accumulator += delta;
    camera.position.set(0, 5, player.mesh.position.z + 8);
    //camera.position.z = player.mesh.position.z + 10;
    //ground.mesh.rotation.x = t * 0.001;
    camera.lookAt(
      0,
      player.mesh.position.y,
      player.mesh.position.z
    );
    while (accumulator >= fixedTimeStep) {
      world.step(fixedTimeStep);
      accumulator -= fixedTimeStep;
    }
    player.mesh.position.copy(sphereBody.position);
    player.mesh.rotation.set(t * -0.005, 0, Math.PI/2);
    //player.mesh.setRotationFromAxisAngle(axis, angle);
    //player.mesh.quaternion.copy(sphereBody.quaternion);
    //zoneBody.position.z = 10;
    if (delta > 0) {
      world.step(delta);
    }
    objectInstructions.position.set(
      player.mesh.position.x - 500,
      player.mesh.position.y + 1000 + 50, 
      player.mesh.position.z
    );
    if (stopped) {
      sphereBody.velocity.setZero();
    }
  }
  labelRenderer.render(scene, camera);
  renderer.render(scene, camera);
}

animate();

document.addEventListener("keydown", jump, false);
// jump function
function jump(event) {
  if (started) {
    if (event.which == 32) {
      if (zone.mesh.visible == true && sphereBody.position.y != zoneBody.position.y) {
        showQuiz();
        setTimeout(() => {
          zone.mesh.visible = false;
        }, 1000);
      }
      if (player.mesh.position.y <= 1) {
        stopped = false;
        sphereBody.applyImpulse(impulseJump);
      }
      console.log(zoneBody.position.z);
    }
    if (event.which == 71) {
      console.log(sphereBody.position.z);
    }
  }
}

function showQuiz() {
  paused = true;
  putQ(qNumber);
}

// document.addEventListener("keydown", move, false);
// // move functions
// function move(event) {
//   if (started) {
//     if (event.which == 37) {
//       stopped = false
//       sphereBody.velocity.set(-20, 0, 0);
//     } if (event.which == 39) {
//       stopped = false;
//       sphereBody.velocity.set(20, 0, 0);
//     }
//   }
// }

document.addEventListener("keyup", stop, false);
function stop(event) {
  if (started) {
    if ((event.which == 37 || event.which == 39) && sphereBody.position.y <= 1) {
      stopped = true;
    }
  }
}

document.getElementById("startGame").addEventListener("click", start, false);
function start(event) {
  //var force = new CANNON.Vec3(0, 0, 100);
  document.getElementById("ins").innerHTML = "";
  //zoneBody.applyForce(force);
  started = true;
  blinkZone();
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
// handle the buttons
document.getElementById("a").addEventListener("click", answerA, false);
document.getElementById("b").addEventListener("click", answerB, false);
document.getElementById("c").addEventListener("click", answerC, false);
document.getElementById("d").addEventListener("click", answerD, false);

function answerA(event) {
  if (submitA("a", qNumber)) {
    score++;
  };
  moveOn();
}
function answerB(event) {
  if (submitA("b", qNumber)) {
    score++;
  }
  moveOn();
}
function answerC(event) {
  if (submitA("c", qNumber)) {
    score++
  }
  moveOn();
}
function answerD(event) {
  if (submitA("d", qNumber)) {
    score++;
  }
  moveOn();
}

function moveOn() {
  //var force = new CANNON.Vec3(0, 0, 100);
  qNumber++;
  paused = false;
}

function blinkZone() {
  if (started) {
    setInterval(() => {
      zone.mesh.visible = true;
      setTimeout(() => {
        if (!paused) {
          zone.mesh.visible = false;
        }
      }, Math.random() * 2000 + 1000);
    }, Math.random() * 5000 + 1000);
  } 
}