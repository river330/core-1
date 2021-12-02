var r = 0;
var b = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  
}
function draw() {
  r =  map(mouseY, 0, windowWidth, 0, 255);
  b = map (mouseX, 0, windowWidth, 255, 0);
  g = map (mouseY, 0, windowWidth, 255, 0)
  fill(r, g, b);
   translate(580, 200);
  noStroke();
  v = random (0, 100)
  for (let i = 0; i < 10; i ++) {
    ellipse(mouseX, mouseY, v, v);
    rotate(PI/v);
  }


}

function mouseClicked() {
  background("black")
}