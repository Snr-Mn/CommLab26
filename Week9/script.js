let adSpace = document.querySelector('.tabScreen');

// function callAd() {
//     document.querySelector(".skipAd").innerHTML = "<b>MORE ADS</b>";

//     const createAd = document.createElement('div')
//     createAd.className = 'moreAds';


//     adSpace.append(createAd);
// }

function spawnAd() {
    document.querySelector(".skipAd").innerHTML = "<b>MORE ADS</b>";
    const newAd = document.createElement('div');
    newAd.className = 'moreAds';
    newAd.style.position = 'absolute';
    newAd.style.left = Math.random() * 80 + '%';
    newAd.style.top = Math.random() * 80 + '%';

    newAd.style.width = Math.random() * 20 + 'cm';
    newAd.style.height = Math.random() * 10 + 'cm';
    newAd.style.backgroundColor = getRandomRGBColor();


    newAd.onclick = function () {
        newAd.remove();
    };


    adSpace.append(newAd);
}

function getRandomRGBColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}