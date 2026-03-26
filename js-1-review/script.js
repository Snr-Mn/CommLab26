// Variables hold values, usually strings or numbers.
// we declare variables ONCE with the keyword "let":
let day = "Wednesday";
let year = 2026;

// JS has some in-built functions we can use
// e.g. "alert()" makes the browser pop up an alert window 
// please don't use alert() in your projects

// the console.log() function writes something to the developer console
// we can think of its main use case to 'reveal' the values of 
// variables to us. 
// we RUN/CALL/EXECUTE/USE functions by naming them and attaching to parenthesis to them:
console.log("Today is " + day + ".");
console.log("Next year will be " + (year + 1) + ".");
// check your browsers developer console to see those logs. 

// Alternatively we could have saved the whole sentence in a new variable:
let sentence = "Next year will be " + (year + 1) + ".";
console.log(sentence);

// code in the javascript file runs right after the page is loaded. 
// alternatively, we can define our own functions
// we define a function only once, after that it can be used wherever we want
// we define a function like this:
function myOwnFunction() {
    console.log("this text means that my own function ran successfully!")
}
// ...funtion can then be called at specific "events", for example at the click event of an element on the page
// see the html code to see how the function is "bound to the click event"




// the DOM is the text based representation of our website. in our code, we
// interact with our website through the DOM. 
// in JS, we generally do to things to the website:
// 1. select an existing element --> do something to it ("manipulate it")
// 2. create a new element --> do something to it --> add it to the page

// below, let's do 1. of the above actions:

// select the headline element and save the selection in a variable:
let headline = document.querySelector("h1");


function changeText() {
    headline.innerText = "This website IS interactive!";
}
function changeHTML() {
    headline.innerHTML = "<i>This website IS <a href='https://www.google.com'>interactive!</a></i>";

}
function changeStyle() {
    headline.style.color = "red";
    headline.style.backgroundColor = "black";
    document.body.style.backgroundColor = "white";
}