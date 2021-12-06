
function setup() {
  createCanvas(windowWidth, windowHeight);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// let circleBgcolor = {r: 255, g: 0, b:255};


// function circleColor() {
//   circleBgcolor.r = random(0, 255);
//   circleBgcolor.g = random(0, 255);
//   circleBgcolor.b = random(0, 255);

// }


function draw() {
  let circleBgcolor = {r: 255, g: 0, b:255};

  circleBgcolor.r = random(0, 255);
  circleBgcolor.g = random(0, 255);
  circleBgcolor.b = random(0, 255);


  v = random (100, 400)
  frameRate(20)
  stroke(255);
  fill(circleBgcolor.r,circleBgcolor.g,circleBgcolor.b, 50);
  ellipse(mouseX, mouseY, v, v);

}

function mousePressed() {
  clear();
  circleColor();

}

function changeText() {
  document.getElementById("text").innerHTML = "enter here";

}

function returnText() {
  document.getElementById("text").innerHTML = "designs by Rand";
}

let container = document.querySelector(".container");
container.addEventListener("mouseover", changeText);
container.addEventListener("mouseout", returnText);

function changeColor() {
  let x = map(mouseX, 0, windowWidth, 0, 255);
  let y = map(mouseY, 0, windowHeight, 0, 255);
  let z = map(mouseX, 0, windowWidth, 0, 255);

  document.getElementById("text").style.color = "rgba(" + x + "," + y + "," + z + "," + "50" + ")";


} 



let body = document.getElementsByTagName("body");
document.addEventListener("mousemove", changeColor)



