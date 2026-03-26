let box1 = document.querySelector("#box1")

function moveBox() {
    box1.classList.toggle("moveRight")
}


function anotherFunction() {
    console.log("button pressed")
}

function addButton() {
    let btn = document.createElement('button');
    btn.innerText = 'multiply';
    btn.onclick = anotherFunction; //<-- there are no "()" here. see the slides to find out why!

    document.querySelector(".buttonContainer").append(btn);
}

function turnElementRed(element) {
    element.style.backgroundColor = "red";
}

function turnOneButtonRed() {

}

function turnAllButtonsRed() {

}