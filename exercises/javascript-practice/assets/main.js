function Time() {
	let date = new Date();
 	let hour = date.getHours();
 	let minute = date.getMinutes();
	let second = date.getSeconds();

 	let period = "";
 
 	if (hour >= 12) {
 		period = "pm";
 	} else {
 		period = "am";
 	}


 	if (hour == 0) {
		 hour = 12;
 	} else {
 	if (hour > 12) {
 		hour = hour - 12;
 		}
 	}

hour = update(hour);
minute = update(minute);
second = update(second);

function update(t) {
 if (t < 10) {
 return "0" + t;
 }
 else {
 return t;
 }
}

 document.getElementById("clock").innerText = hour + ":" + minute + ":" + second + " " + period;
 setTimeout(Time, 1000);
}

Time();

let body = document.body;


function checkAlarm() {
	let date = new Date();
	let hour = date.getHours();
	if (hour >= 7) {
		body.classList.add("light");
		document.getElementById("button").innerHTML = "Wake Up!";
		button.classList.add("buttonOn");
		document.getElementById("button_2").style.display = "inherit"

	}
	if (hour <=7) {
		document.getElementById("button").innerHTML = "Keep Sleeping";
		document.getElementById("button_2").style.display = "inherit"

	}
}

function restartAlarm() {
	window.location.reload();
}

let button = document.querySelector(".button");
button.addEventListener("click", checkAlarm);

let reset = document.querySelector(".button_2");
button_2.addEventListener("click", restartAlarm)









