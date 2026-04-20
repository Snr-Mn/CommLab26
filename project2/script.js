let layers = document.querySelectorAll(".layer");
let rabbit = document.querySelector(".rabbit");

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});



function rabbitHover(eventInfo) {
    console.log("event: ", eventInfo)

    let posY = (Math.random() * 50) + 10 + "%"
    let posX = (Math.random() * 10) + "px"

    eventInfo.target.style.transform = `translate(${posX}, ${posY})`
}


function background(eventInfo) {
    console.log(eventInfo);

    eventInfo.target.style.transform = `scale(${2})`
}

function scrollSpeed(elm) {
    elm.addEventListener("scroll", background);
}


layers.forEach(scrollSpeed());