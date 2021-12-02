let teapot;

function preload() {
  // Load model with normalise parameter set to true
  teapot = loadModel('assets/untitled.obj', true);
}

function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(200);
  scale(0.4); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(teapot);
}