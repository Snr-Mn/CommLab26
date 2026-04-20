let prev_h, prev_m, prev_s;
let calcHour, calcMin, calcSec;

function getTheTime() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  if (h !== prev_h) {
    let equ = Math.floor(Math.random() * 2);
    calcHour = getRandomCalc(h, equ);
    document.getElementById("hourCalc").textContent = calcHour;
    prev_h = h;
  }

  if (m !== prev_m) {
    let equ = 2 + Math.floor(Math.random() * 3);
    calcMin = getRandomCalc(m, equ);
    document.getElementById("minCalc").textContent = calcMin;
    prev_m = m;
  }

  if (s !== prev_s) {
    let equ = Math.floor(Math.random() * 6);
    calcSec = getRandomCalc(s, equ);
    document.getElementById("secCalc").textContent = calcSec;
    prev_s = s;
  }
}

getTheTime();
setInterval(getTheTime, 1000);

function getRandomCalc(time, equ) {
  if (time === 0) return "0";

  let a = 1 + Math.floor(Math.random() * (time - 1));
  let b = time - a;
  let extra = 1 + Math.floor(Math.random() * 10);

  if (equ === 0) return `(${a} + ${b})`;
  if (equ === 1) return `(${time + extra} - ${extra})`;
  if (equ === 2) return `(${a} + ${b + extra}) - ${extra}`;
  if (equ === 3) return `(${a + extra} - ${extra}) + ${b}`;          // fixed
  if (equ === 4) return `(${a} + ${extra}) - ${extra - b}`;
  if (equ === 5) return `${a} + (${time + extra} - ${a + extra})`;   // avoids negatives

  return `${time}`;
}


// Helper: builds an array of n items using action(i)
function repeat(n, action) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(action(i));
  }
  return result;
}