const layers = document.querySelectorAll(".layer");

const rabbit = document.querySelector(".rabbit");
const rabbitIMG = document.querySelector("#rabbitIMG");
const rabbitText = document.querySelector('.rabbitText');
const tree = document.querySelector(".treeWrapper");
const cursor = document.querySelector('.cursor');

let percentage = 0;

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

function getScrollPercentage() {
    // how many pixels have we scrolled yet?
    let scrolledAlready = window.scrollY;

    // how high is our page?
    let pageHeight = document.body.scrollHeight;

    // how high is the window?
    let windowHeight = window.innerHeight;

    // how far can we scroll?
    let possibleScrollSpace = pageHeight - windowHeight;

    // console.log(scrolledAlready, possibleScrollSpace);
    let percentage = (scrolledAlready / possibleScrollSpace);
    return percentage;
}


layers.forEach(layer => {
    const depth = parseFloat(layer.dataset.depth);
    layer.style.zIndex = depth * -10;
});

window.addEventListener("scroll", () => {
    percentage = getScrollPercentage()
    layers.forEach(layer => {
        const depth = parseFloat(layer.dataset.depth) * 3;
        const scale = depth + depth * percentage * 10
        // if (scale < 0) {
        // layer.style.display = `none`;
        // }
        layer.style.transform = `scale(${scale})`;
        layer.style.top = `${scale * 10}px`;
    });

    // tree fade in at 0.8
    if (percentage > 0.8) {
        tree.style.display = 'block';
        tree.style.opacity = 1;
    } else {
        tree.style.display = 'none';
        tree.style.opacity = 0;
    }

    // rabbit end sequence at 0.95
    if (percentage > 0.95) {
        const endProgress = (percentage - 0.95) / 0.05;
        rabbit.style.opacity = 1 - endProgress;
        rabbit.style.transform = `translate(-50%, ${endProgress * 40}%) scale(${1 - endProgress * 0.5})`;
    } else {
        tree.style.display = 'none';
        rabbit.style.opacity = 1;
        rabbit.style.transition = '';
        rabbit.style.top = `${80 - percentage * 30}%`;
        rabbit.style.transform = `translate(-50%, 0%)`;
    }
});

const door = document.querySelector("#door");
door.addEventListener("click", fallingButton);


function fallingButton() {
    window.location.assign("./html/falling.html");
}

const lines = [
    "I'm late!",
    "No time, no time!",
    "Follow me...",
    "Don't fall behind.",
    "Oh my ears and whiskers!",
    "Curiouser and curiouser...",
    "This way!",
    "Hurry!!",
];

function rabbitTalk() {
    const line = lines[Math.floor(Math.random() * lines.length)];
    rabbitText.textContent = line;
    rabbitText.style.opacity = "1";

    setTimeout(() => {
        rabbitText.style.opacity = "0";
    }, 4000);
}

setInterval(rabbitTalk, 5000);
setInterval(rabbitEscape, 3000);


function rabbitEscape() {
    if (percentage <= 0.95) {


        const randomX = Math.random() * 250 - 125;
        const randomY = Math.random() * -100;

        rabbitIMG.style.transform = `translate(${randomX}%, ${randomY}px)`;
        rabbitText.style.transform = `translateX(calc(-50% + ${randomX}%)) translateY(${randomY}px)`;
    } else {
        return;
    }
}

rabbitIMG.addEventListener("click", rabbitEscape);
