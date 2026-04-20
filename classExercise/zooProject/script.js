
let monkeyEnclo = document.querySelector("#monkeyEnclosure")
let giraffeEnclo = document.querySelector("#giraffeEnclosure")
let snakeEnclo = document.querySelector("#snakeEnclosure")

function newMonkey() {
    newAnimal('monkey', monkeyEnclo);
}
function newGiraffe() {
    newAnimal('giraffe', giraffeEnclo);
}
function newSnake() {
    newAnimal('snake', snakeEnclo);
}

function newAnimal(name, enclosure) {

    console.log('making new' + name);

    let div = document.createElement('div');

    let p = document.createElement('p');



    div.className = "animal " + name;
    p.innerText = name;

    let posY = (Math.random() * 250) + 'px';
    let posX = (Math.random() * 250) + 'px';


    div.style.top = posY;
    div.style.left = posX;

    div.append(p);
    enclosure.append(div);
}