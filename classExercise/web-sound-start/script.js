
let playBtn = document.querySelector("#playButton");
let pauseBtn = document.querySelector("#pauseButton");

let fastBtn = document.querySelector("#fastButton");
let slowBtn = document.querySelector("#slowButton");
let speedDisplay = document.querySelector("#speedDisplay");

let catSound = document.querySelector("#catSound")

let soundSpeed = 1;

function playSound() {
    catSound.play();
    catSound.loop = true;
}

function pauseSound() {
    catSound.pause();
}

playBtn.addEventListener('click', playSound);
pauseBtn.addEventListener('click', pauseSound);

fastBtn.addEventListener('click', function () {
    soundSpeed = soundSpeed * 1.1;
    speedDisplay.innerText = soundSpeed;
    catSound.playbackRate = soundSpeed;
});

slowBtn.addEventListener('click', function () {
    soundSpeed = soundSpeed * 0.9;
    speedDisplay.innerText = soundSpeed;
    catSound.playbackRate = soundSpeed;

});
