let s = document.querySelector("span");
console.log(s);
function spanHover(eventInfo) {
    console.log("event: ", eventInfo)

    let posY = (Math.random() * 200) - 100 + "px"
    let posX = (Math.random() * 200) - 100 + "px"

    eventInfo.target.style.color = "red";
    eventInfo.target.style.transform = `translate(${posX}, ${posY})`
}


s.addEventListener("mouseover", spanHover);