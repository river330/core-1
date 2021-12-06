
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

    v = random (25, 50)
    frameRate(20)
    stroke(255);
    fill(circleBgcolor.r,circleBgcolor.g,circleBgcolor.b, 50);
    ellipse(mouseX, mouseY, v, v);
  
}

function mousePressed() {
  clear();
  circleColor();

}

function changeColor() {
  let x = map(mouseX, 0, windowWidth, 0, 255);
  let y = map(mouseY, 0, windowHeight, 0, 255);
  let z = map(mouseX-mouseY, 0, windowWidth, 0, 255);

  document.querySelector(".slider-item").style.backgroundColor = "rgba(" + x + "," + y + "," + z + "," + "50" + ")";
  document.querySelector(".slider-item2").style.backgroundColor = "rgba(" + (x+80) + "," + (y) + "," + (z) + "," + "50" + ")";
  document.querySelector(".slider-item3").style.backgroundColor = "rgba(" + (x+160) + "," + (y) + "," + (z) + "," + "50" + ")";
  document.querySelector(".slider-item4").style.backgroundColor = "rgba(" + (x+240) + "," + (y) + "," + (z) + "," + "50" + ")";
  document.querySelector(".slider-item5").style.backgroundColor = "rgba(" + (x) + "," + (y-50) + "," + (z) + "," + "50" + ")";
  document.querySelector(".slider-item6").style.backgroundColor = "rgba(" + (x+80) + "," + (y-50) + "," + (z) + "," + "50" + ")";
  document.querySelector(".slider-item7").style.backgroundColor = "rgba(" + (x+160) + "," + (y-50) + "," + (z) + "," + "50" + ")";
  document.querySelector(".slider-item8").style.backgroundColor = "rgba(" + (x+240) + "," + (y-50) + "," + (z) + "," + "50" + ")";

} 


let body = document.getElementsByTagName("body");
document.addEventListener("mousemove", changeColor);



// let red = document.getElementById("hover");
// red.addEventListener("mouseover", function(){
//   document.getElementById("myDIV").style.opacity = "0.";
// })

// red.addEventListener("mouseout", function(){
//   document.getElementById("myDIV").style.opacity = "0.2";
// })


