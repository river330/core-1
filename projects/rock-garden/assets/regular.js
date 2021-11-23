

let body = document.body
let buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {
  button.addEventListener("click", function(event){
    button.classList.toggle("buttonOn");
  });
});



function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)


// let body = document.body;

// function turnOnWord() {
//   button.classList.toggle("buttonOn");
//   img.classList.toggle("search");
// }


// let button = document.querySelector(".button");
// let one = document.querySelector(".search");
// button.addEventListener("click", turnOnWord);

// collect all the divs
let divs = document.querySelectorAll(".button");
// get window width and height
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for ( let i=0; i < divs.length; i++ ) {
  
    // shortcut! the current div in the list
    let thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    thisDiv.style.position = "absolute";
    
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}

window.onresize = function(){ location.reload(); };

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

let modal = document.querySelector(".modal");

let closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}


function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


document.addEventListener("DOMContentLoaded", toggleModal);

closeButton.addEventListener("click", toggleModal);






