let inputBox = document.querySelector("#inputBox") // = select the input element
let output = document.querySelector('#output'); // = select the output div
let myButton = document.querySelector('#myButton');
let num = 10;

// challenge 1: 
// when the button is clicked
// change the styling of the output text

function onClick() {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;


    output.style.color = `rgb(${red}, ${green}, ${blue})`;
    output.style.backgroundColor = `rgb(${blue}, ${red}, ${green})`;

    num = num - 1;

    if (num == 0) {
        supersize(myButton);
    }
}

myButton.addEventListener("click", onClick);


// challenge 2: 
// as we type into the input box, 
// the text should appear inside the "ouput" p tag:

function valChanged() {
    let text = inputBox.value;

    output.innerText = text;
    if (text == 'spin') {
        spin(inputBox)
    }
}


inputBox.addEventListener("input", valChanged);


function spin(element) {
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate(360deg)"
}



// -------- PART 2
let messageBoard = document.querySelector("#messageBoard");

function appendCountdown() {
    addMessage(`Press button ${num} times`)
}
setInterval(appendCountdown, 500)

// function to add text to the div with id "messageboard"
function addMessage(messagetext) {
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}

// function to rapidly increase the size of an element
function supersize(element) {
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}

