let layers = document.querySelector(".layers");
let rabbit = document.querySelector(".rabbit");
let scale = 0.1;

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

let layerNum = 1;

function scaleElm(element) {
    let percentage = getScrollPercentage();
    element.style.transform = `scale(${scale})`;
    scale = 0.1 + (percentage);
}


function getScrollPercentage() {

    let scrolledAlready = window.scrollY;

    let pageHeight = document.body.scrollHeight;


    let windowHeight = window.innerHeight;


    let possibleScrollSpace = pageHeight - windowHeight;


    let percentage = (scrolledAlready / possibleScrollSpace);
    return percentage;
}

window.addEventListener("scroll", function () {
    let percentage = getScrollPercentage();
    console.log(percentage);

    scaleElm(layers);


});


