let soundSpeed = 1;
let playBtn =  document.querySelector("#playButton");
let pauseBtn =  document.querySelector("#pauseButton");
let catSound =  document.querySelector("#catSound");

let fastBtn =  document.querySelector("#fastButton");
let slowBtn =  document.querySelector("#slowButton");
let speedDisplay =  document.querySelector("#speed");

fastBtn.addEventListener("click", function(){
    // increase global soundSpeed variable
    soundSpeed = soundSpeed * 1.1;
    // display currrent value of variable on the page:
    speedDisplay.innerText = soundSpeed;
    // actualy use variable to apply it to the sound elements playbackRate:
    catSound.playbackRate = soundSpeed;
})

slowBtn.addEventListener("click", function(){
    // decrease global soundSpeed variable
    soundSpeed = soundSpeed * 0.9;
    // display currrent value of variable on the page:
    speedDisplay.innerText = soundSpeed;
    // actualy use variable to apply it to the sound elements playbackRate:
    catSound.playbackRate = soundSpeed;
})







function playSound(){
    console.log("play now");
    catSound.loop = true;
    catSound.play();
}
playBtn.addEventListener("click", playSound);

// // same as above:
// playBtn.addEventListener("click", function(){
//     console.log("play now");
//     catSound.play();
// });


function pauseSound(){
    console.log("pause now");
    catSound.pause();
}
pauseBtn.addEventListener("click", pauseSound);


