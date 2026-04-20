// function addBox() {
//     let paragraph = document.createElement('p');

//     paragraph.innerText = "This def works 100% on cod, for eel, no carp."

//     document.body.append(paragraph);
// }

let container = document.querySelector('.boxContainer');

function addBox() {
    let box = document.createElement('div');
    box.className = 'box';

    container.append(box);
}

function removeBox() {
    container.remove();
}

function moveBox() {
    container.style.left = '-500px'
}