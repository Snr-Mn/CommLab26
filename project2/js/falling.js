const body = document.body;
const cat = document.querySelector('.cat');
const catStand = document.querySelector('.catStand');
const cursor = document.querySelector('.cursor');
const nextLocation = document.querySelector('.nextLocation');
let sizeVal = 2;


window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

function updateCursorSize() {
    document.documentElement.style.setProperty('--cursor-scale', sizeVal);

    cursor.style.transform = `translate(-30%, -10%) scale(${sizeVal})`

}

function getScrollPercentage() {
    const scrolledAlready = window.scrollY;
    const pageHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const possibleScrollSpace = pageHeight - windowHeight;
    return scrolledAlready / possibleScrollSpace;
}

window.addEventListener("scroll", () => {
    const percentage = getScrollPercentage();

    if (percentage >= 1) {
        body.style.overflow = 'hidden';
        cat.classList.add('fade-out');
        catStand.classList.add('show');
        nextLocation.style.display = 'block'
    } else {
        body.style.overflow = 'auto';
        cat.classList.remove('fade-out');
        catStand.classList.remove('show');
        nextLocation.style.display = 'none'
    }
});


const cake = document.querySelector('.cake');
const water = document.querySelector('.water');
const hole = document.querySelector('.hole');



cake.addEventListener('click', () => {
    sizeVal += 0.5;
    updateCursorSize();
});


water.addEventListener('click', () => {
    sizeVal = Math.max(0, sizeVal - 0.5);
    updateCursorSize();
});




hole.addEventListener('click', () => {
    if (sizeVal <= 0.5) {
        alert('Yay, you fit!')

        window.location.assign("./wonderland.html");


    } else {
        alert('No fit!')
    }
});