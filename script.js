var timer;

function startTimer() {
	var hours = parseInt(document.getElementById("hours").value);
	var minutes = parseInt(document.getElementById("minutes").value);
	var seconds = parseInt(document.getElementById("seconds").value);

	var totalTime = hours * 3600 + minutes * 60 + seconds;

	var now = new Date().getTime();
	var endTime = new Date(now + totalTime * 1000);

	document.getElementById("endtime").innerHTML = "End Time: " + endTime.toLocaleTimeString();

	timer = setInterval(function() {
		totalTime--;
		var h = Math.floor(totalTime / 3600);
		var m = Math.floor((totalTime % 3600) / 60);
		var s = Math.floor(totalTime % 60);

		var timeString = h.toString().padStart(2, "0") + ":" + m.toString().padStart(2, "0") + ":" + s.toString().padStart(2, "0");
		document.title = timeString;
		document.getElementById("endtime").innerHTML = "End Time: " + endTime.toLocaleTimeString();
		document.getElementById("hours").value = h;
		document.getElementById("minutes").value = m;
		document.getElementById("seconds").value = s;

		if(totalTime <= 0) {
			clearInterval(timer);
			document.title = "Timer Expired!";
			document.getElementById("endtime").innerHTML = "End Time: " + endTime.toLocaleTimeString() + " (Expired!)";
			document.getElementById("audio").play();
			window.alert("Timer Expired!");
		}
	}, 1000);
}

function refresh() {
	clearInterval(timer);
	document.title = "Timer";
	document.getElementById("hours").value = 0;
	document.getElementById("minutes").value = 0;
	document.getElementById("seconds").value = 0;
	document.getElementById("endtime").innerHTML = "";
	document.getElementById("audio").pause();
	document.getElementById("audio").currentTime = 0;
}
