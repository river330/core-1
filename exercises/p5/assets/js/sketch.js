function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  from = color(255, 0, 0, 0.2 * 255);
  to = color(0, 0, 255, 0.2 * 255);
  // let mouse = map(mouseX, 0, width, 0, 1);
  let mouse2 = map(mouseY, 0, width, 0, 1);
  let test = lerpColor(from, to, mouse2);
  background(test);
}
