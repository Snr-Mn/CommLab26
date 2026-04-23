// old code:
function spanHovered(eventInfo) {
    console.log("hello");

    let btn = document.querySelector("button");

    eventInfo.target.style.color = "red";
    let randomX = Math.random() * 200 - 100; // -100 to 100
    let randomY = Math.random() * 200 - 100; // -100 to 100
    eventInfo.target.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
}

function addMover(element) {
    element.addEventListener("mouseover", spanHovered);
}

let allSpans = document.querySelectorAll("span");
allSpans.forEach(addMover)

function spinAllSpans() {
    allSpans.forEach(span => spinElm(span));
}



let max_y = Math.random() * 600 - 300;


window.addEventListener("scroll", function () {
    let percentage = getScrollPercentage() * 100;
    console.log(percentage);

    let firstSpan = document.querySelector("span:nth-child(1)")

    let y = max_y * percentage()

    firstSpan.style.position = 'fixed';
    firstSpan.style.top = `${percentage}vh`;
    firstSpan.style.right = `${percentage}px`;
})


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

let deg = 360;

function spinElm(element) {
    element.style.transform = `rotate(${deg})`;
    deg = deg + 360;
}
