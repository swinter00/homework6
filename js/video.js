var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate = video.playbackRate * .9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = video.playbackRate * 1.1;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 5 < video.duration) {
		video.currentTime += 5;
		console.log("Current location " + video.currentTime);
	} else {
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
});

document.querySelector("#mute").addEventListener("click", function () {
	let item = document.querySelector("#mute");
	if (!video.muted) {
		video.muted = true;
		item.innerHTML = "Unmute";
	} else {
		video.muted = false;
		item.innerHTML = "Mute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function () {
	let new_val = document.querySelector("#volumeSlider").value;
	video.volume = new_val / 100;
	console.log(video.volume);
	document.querySelector('#volume').innerHTML = new_val + "%";
});

document.querySelector("#old").addEventListener("click", function () {
	document.querySelector("#myVideo").classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function () {
	document.querySelector("#myVideo").classList.remove("oldTime");
});