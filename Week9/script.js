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
    newAd.style.left = Math.random() * 90 + '%';
    newAd.style.top = Math.random() * 90 + '%';

    adSpace.append(newAd);
}
