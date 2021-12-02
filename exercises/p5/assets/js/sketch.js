function setup() {
  pixelDensity(3)
  createCanvas(windowWidth, windowHeight);
  background("black");
  colorMode(RGB);
  
}

function windowResized() {
  pixelDensity(3)
  createCanvas(windowWidth, windowHeight);
  background("black");
  colorMode(RGB);
  
}


function draw() {
  frameRate(20);
  stroke(255, 0, 0, 120);
  strokeWeight(5); 
  noFill();
  line(mouseY-60, mouseX, mouseX, 110);
  stroke(0, 255, 255, 120);
  line(mouseX-60, mouseY, mouseY+50, 160);
  stroke(219, 240, 34, 120);
  line(mouseX-20, mouseY, mouseY+20, mouseX+20);
  
}

function mouseClicked() {
  background("black")
}

function mouseWheel() {
  
}