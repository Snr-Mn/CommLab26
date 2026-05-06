
const cake = document.querySelector('.cake');
const water = document.querySelector('.water');
const hole = document.querySelector('.hole');


const body = document.body;
const cat = document.querySelector('.cat');
const catStand = document.querySelector('.catStand');
const cursor = document.querySelector('.cursor');

const speechBubble = document.querySelector('.speechBubble')
const catText = document.querySelector('.catText')


const nextLocation = document.querySelector('.nextLocation');
const table = document.querySelector('.table');




const catStandText = document.querySelector('.catStandText');
const catStandSpeak = document.querySelector('.catStandSpeak');
const catStandWrapper = document.querySelector('.catStandWrapper');

const standLines = [
    "We're all mad here.",
    "Try eating the Cake.",
    "Curiouser and curiouser...",
    "It's always tea time.",
    "Can you even fit in the hole?",
    "You're size is very troublesome.",
];
const FALLING_ITEMS = ['🕐', '🗝️', '📖', '🎩', '🐇', '🃏', '🍄', '🌹', '🫙', '🪄', '🦋', '🌂', '🔮', '🥀', '🎪'];


setInterval(catStandTalk, 5000);


function catStandTalk() {
    const line = standLines[Math.floor(Math.random() * 6)];

    catStandText.innerHTML = line;

    catStandSpeak.style.opacity = '1';

    setTimeout(() => {
        catStandSpeak.style.opacity = '0';
    }, 4000);
}



window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


let cursorSize = 2;
function updateCursorSize() {
    cursor.style.transform = `scale(${cursorSize})`
}

function getScrollPercentage() {
    const scrolledAlready = window.scrollY;
    const pageHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const possibleScrollSpace = pageHeight - windowHeight;
    return scrolledAlready / possibleScrollSpace;
}

const circleLayers = document.querySelectorAll('.circleLayer');
const numLayers = circleLayers.length;

const objectPool = [];

for (let i = 0; i < 20; i++) {
    const fallElm = document.createElement('div');
    fallElm.className = 'fallingObject';
    fallElm.textContent = FALLING_ITEMS[Math.floor(Math.random() * FALLING_ITEMS.length)];

    const angle = Math.random() * 360;
    const triggerAt = (i / 20) * 0.92;

    objectPool.push({ fallElm, triggerAt, angle });
    document.body.appendChild(fallElm);
}

window.addEventListener("scroll", () => {
    const percentage = getScrollPercentage();


    objectPool.forEach(({ fallElm, triggerAt, angle }) => {
        const t = (percentage - triggerAt) / 0.2;

        if (t <= 0 || t >= 1 || percentage == 1) {
            fallElm.style.opacity = 0;
            return;
        }
        const x = Math.cos(angle) * t * 55;
        const y = Math.sin(angle) * t * 40;

        const scale = 0.15 + t * 8;
        if (t < 0.2) {
            fallElm.style.opacity = t / 0.2;
        } else {
            fallElm.style.opacity = 1 - t;
        }

        fallElm.style.left = `calc(50vw + ${x}vw)`;
        fallElm.style.top = `calc(50vh + ${y}vh)`;
        fallElm.style.transform = `translate(-50%, -50%) scale(${scale})`;
    });

    circleLayers.forEach((layer) => {
        const depth = parseInt(layer.dataset.depth);
        const phase = (depth - 1) / circleLayers.length;
        const t = (percentage + phase) % 1;

        const size = 150 * (window.innerWidth / 100) ** (t * t);
        const drop = t * window.innerHeight * 0.2;

        if (percentage >= 1) {
            layer.style.transition = 'top 0.2s ease-in, transform 0.6s ease-out';
            layer.style.top = `90vh`;
            layer.style.transform = `translate(-50%, -50%) scaleY(0.2)`;
        } else {
            layer.style.transition = 'none';
            layer.style.top = `calc(60vh - ${drop}px)`;
            layer.style.transform = `translate(-50%, -50%) scaleY(0.9)`;
        }

        if (t > 0.3 && t <= 1) {
            layer.style.opacity = 1 - t;
        } else {
            layer.style.opacity = 0;
        }

        layer.style.zIndex = ((1 - t) * 10);
        layer.style.backgroundColor = `black`;
        layer.style.width = size + 'px';
        layer.style.height = size + 'px';
    });

    if (percentage < 0.2) {
        catText.innerText = "Who are you?"
    } else if (percentage >= 0.2 && percentage < 0.4) {
        catText.innerText = "I am the CHESHIRE Cat!"
    } else if (percentage >= 0.4 && percentage < 0.6) {
        catText.innerText = "How silly of you to fall down here!"
    } else if (percentage >= 0.6 && percentage < 0.8) {
        catText.innerText = "Don't ask how I'm floating"
    } else if (percentage >= 0.8) {
        catText.innerText = "Looks like you're going to hit the floor"
    } else {
        catText.innerText = "";
    }

    if (percentage >= 1) {
        catStandWrapper.style.opacity = 1;
        catStandWrapper.style.pointerEvents = 'auto';

        cat.style.opacity = 0;
        speechBubble.style.opacity = 0;
        catText.style.opacity = 0;

        cake.style.transform = 'translateX(-40%) translateY(-14vh)';
        table.style.transform = 'translateX(-50%) translateY(0)';
        water.style.transform = 'translateX(-50%) translateY(-14vh)';
        hole.style.transform = 'translateX(-50%) translateY(0vh)';
    } else {
        catStandWrapper.style.opacity = 0;
        catStandWrapper.style.pointerEvents = 'none';
        cat.style.opacity = 1;
        speechBubble.style.opacity = 1;
        catText.style.opacity = 1;

        table.style.transform = 'translateX(-50%) translateY(-150vh)';
        cake.style.transform = 'translateX(-50%) translateY(-150vh)';
        water.style.transform = 'translateX(-50%) translateY(-150vh)';
        hole.style.transform = 'translateX(-50%) translateY(-150vh)';
    }
});

cake.addEventListener('click', () => {
    cursorSize += 0.5;
    updateCursorSize();
});

water.addEventListener('click', () => {
    if (cursorSize > 0.5) {
        cursorSize -= 0.5;
    } else {
        cursorSize = 0.5;
    }
    updateCursorSize();
});

hole.addEventListener('click', () => {
    if (cursorSize <= 0.5) {
        window.location.assign("./wonderland.html");
    } else {
        alert("You can't fit through!")
    }
});