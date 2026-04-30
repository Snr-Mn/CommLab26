const layers = document.querySelectorAll(".layer");

const rabbit = document.querySelector(".rabbit");
const rabbitIMG = document.querySelector("#rabbitIMG");

const tree = document.querySelector(".treeWrapper");
const cursor = document.querySelector('.cursor');


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
    const percentage = getScrollPercentage();

    layers.forEach(layer => {
        const depth = parseFloat(layer.dataset.depth) * 3;
        const scale = depth + depth * percentage * 10
        // if (scale < 0) {
        // layer.style.display = `none`;
        // }
        layer.style.transform = `scale(${scale})`;
        layer.style.top = `${scale * 10}px`;
    });

    rabbit.style.bottom = `${percentage * 100}%`;
    rabbit.style.transform = `translate(-50%, ${(1 - percentage) * 200}%)`


    if (percentage > .95) {
        tree.style.display = 'block';
    } else {
        tree.style.display = 'none';
    }
});

const door = document.querySelector("#door");
door.addEventListener("click", fallingButton);


function fallingButton() {
    console.log("aioshufgbjkuhi")
    window.location.assign("./html/falling.html");

}



function rabbitEscape(e) {

    const randomX = Math.random() * 250 - 100
    const randomY = Math.random() * 300;
    rabbitIMG.style.transform = `translate(${randomX}%, ${randomY}px)`;
}

rabbitIMG.addEventListener("click", rabbitEscape);

