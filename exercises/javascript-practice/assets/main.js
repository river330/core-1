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
	}
	if (hour <=7) {
		document.getElementById("button").innerHTML = "Keep Sleeping";

	}
}

function restartClock() {
	let alarm = "Wake Up";
	if (document.getElementById("button").includes(alarm)) {
		window.location.reload();
	}
}

let button = document.querySelector(".button");
button.addEventListener("click", checkAlarm);
button.addEventListener("click", restartClock);







