// What happens if we appens spans instead of p tags to the countdown box?

// Challenge 1
// when we type "move" into the box, move the box to the right

// Challenge 2
// delete the entire page 1 second after the alarm


let inputBox = document.querySelector("#inputBox"); // = select the input element
let output = document.querySelector("#output");  // = select the output div
let myButton = document.querySelector("#myButton"); // = select the button
let clickCounter = 0;

// challenge 1: 
myButton.addEventListener("click", buttonClicked);

function buttonClicked() {
    // EVERYTHING THAT SHOULD HAPPEN WHEN THE BUTTON IS CLICKED
    // GOES INTO THIS FUNCTION:

    // // 1. change the styling of the output text
    // output.style.color = "pink";
    // output.style.backgroundColor = "yellow"; 


    // 2. increase click counter 
    clickCounter = clickCounter + 1;
    console.log("clickCounter", clickCounter);

    // 3. check if the alarm should appear 
    if (clickCounter >= 10) {
        console.log("alarm!");
        supersize(myButton);

        setTimeout(document.body.remove(), 5000);

    }

}




// challenge 2: 
// as we type into the input box, 
// the text should appear inside the "output" p tag:
inputBox.addEventListener("input", inputChanged);

function inputChanged() {
    // EVERYTHING THAT SHOULD HAPPEN WHEN KEYS ARE PRESSED
    // GOES INTO THIS FUNCTION:

    // 1. what's in the input box?
    let text = inputBox.value;

    // 2. REFLECT THE CURRENT TEXT IN OUTPUT:
    output.innerText = text;

    // 3. CHECK IF THE VALUE INSIDE THE INPUT is "spin":
    if (text == 'spin') {
        spin(inputBox);
        console.log("the value is spin, lets spin!!!!!!!");
    } else if (text == 'move') {
        move(inputBox);
        console.log("MOVE TO WIIINNN");
    } else {
        resetPos(inputBox)
    }


}


// function to spin an element 
function spin(element) {
    element.style.transition = "all 1s linear";
    element.style.transform = `rotate(360)`;
}

function move(element) {
    element.style.transition = "all 0.5s ease-in-out";
    element.style.transform = "translate(100px, 0px)";
}

function resetPos(element) {
    element.style.transition = "all 0.5s ease-in-out";
    element.style.transform = "translate(0px, 0px)";
}

// function to rapidly increase the size of an element
function supersize(element) {
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}



// -------- PART 2

let messageBoard = document.querySelector("#messageBoard");

function appendCountdown() {
    let clicksLeft = 10 - clickCounter;
    addMessage("press the button " + clicksLeft + " times");
}

// appendCountdown();
setInterval(appendCountdown, 500);


// function to add text to the div with id "messageboard"
function addMessage(messagetext) {
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}



