const cake = document.querySelector('.cake');
const water = document.querySelector('.water');
const table = document.querySelector('.table');
const cursor = document.querySelector('.cursor')

    ;
const cat = document.querySelector('.catStand');
const catStandText = document.querySelector('.catStandText');
const catStandSpeak = document.querySelector('.catStandSpeak');
const catStandWrapper = document.querySelector('.catStandWrapper');

const rabbit = document.querySelector(".rabbit");
const rabbitIMG = document.querySelector("#rabbitIMG");
const rabbitText = document.querySelector('.rabbitText');

const circleLayers = document.querySelectorAll('.circleLayer');

const FALLING_ITEMS = ['🕐', '🗝️', '📖', '🎩', '🐇', '🃏', '🍄', '🌹', '🫙', '🪄', '🦋', '🌂', '🔮', '🥀', '🎪'];

const standLines = [
    "We're all mad here.",
    "Try eating the Cake.",
    "Thirsty? I'm not.",
    "Curiouser and curiouser...",
    "It's always tea time.",
    "I wonder where the hatter is.",
    "It's always tea time.",
    "It's always tea time.",
];

let cursorSize = 2;

catStandWrapper.style.opacity = 1;
catStandWrapper.style.pointerEvents = 'auto';
cake.style.transform = 'translateX(-40%) translateY(-14vh)';
water.style.transform = 'translateX(-50%) translateY(-14vh)';
table.style.transform = 'translateX(-50%) translateY(0)';


window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

function updateCursorSize() {
    cursor.style.transform = `scale(${cursorSize})`;
}

function catStandTalk() {
    catStandText.innerHTML = standLines[Math.floor(Math.random() * standLines.length)];
    catStandSpeak.style.opacity = '1';
    setTimeout(() => { catStandSpeak.style.opacity = '0'; }, 4000);
}

catStandTalk();
setInterval(catStandTalk, 5000);
setInterval(spawnFallingObject, 700);

function spawnFallingObject() {
    const el = document.createElement('div');
    el.className = 'fallingObject';
    el.textContent = FALLING_ITEMS[Math.floor(Math.random() * FALLING_ITEMS.length)];
    el.style.left = Math.random() * 90 + 5 + 'vw';
    el.style.animationDuration = (4 + Math.random() * 4) + 's';
    el.style.animationDelay = '-' + (Math.random() * 8) + 's';
    document.body.appendChild(el);
}

function catStandTalk() {
    let line;

    if (cursorSize > 3) {
        line = "You're enormous. I liked you smaller.";
    } else if (cursorSize < 1) {
        line = "Careful... you might disappear completely.";
    } else {
        line = standLines[Math.floor(Math.random() * standLines.length)];
    }

    catStandText.innerHTML = line;
    catStandSpeak.style.opacity = '1';
    setTimeout(() => { catStandSpeak.style.opacity = '0'; }, 4000);
}


const lines = [
    "We made it!!",
    "Right on time—somehow!",
    "Splendid! Absolutely splendid!",
    "Oh what a marvelous turn of events!",
    "Everything is going perfectly!",
    "A triumph! A triumph!",
    "Quick—before the moment passes!",
    "We're exactly where we need to be!",
    "What a curious success!",
];

function rabbitTalk() {
    const line = lines[Math.floor(Math.random() * lines.length)];
    rabbitText.textContent = line;

    // pause movement
    rabbit.style.animationPlayState = 'paused';

    rabbitText.style.opacity = "1";

    setTimeout(() => {
        rabbitText.style.opacity = "0";
        rabbit.style.animationPlayState = 'running';
    }, 3000);
}

setInterval(rabbitTalk, 4500);

cat.addEventListener('click', () => {
    // fade out
    cat.style.opacity = '0';

    setTimeout(() => {
        const randomX = Math.random() * 80 + 10; // 10%–90%
        const randomY = Math.random() * 60 + 20; // 20%–80%

        catStandWrapper.style.left = randomX + 'vw';
        catStandWrapper.style.top = randomY + 'vh';
        cat.style.opacity = '1';
    }, 400);
});

cake.addEventListener('click', () => {
    cursorSize += 0.5;
    updateCursorSize();
});

water.addEventListener('click', () => {
    cursorSize = Math.max(0.5, cursorSize - 0.5);
    updateCursorSize();
});

