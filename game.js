"use strict";
// !!!!Player-name Input from local storage.!!!!
document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "interactive") {
    // initLoader();
  } else if (e.target.readyState === "complete") {
    // initApp();
    console.log("localStorage", localStorage.playerName);
    $("#userName").textContent = localStorage.playerName;
  }
});

// Set up of querySelector
const $ = (selector) => document.querySelector(selector);

// Listening for the key-down and calling of the function.
$("body").addEventListener("keydown", (e) => {
  planeComands(e);
});
$("body").focus();

let bottom = 0; // planes positioning 
let bullet = 0; // shot positioning
// Global variable timing storage.
let globalStateShot = {};
// Global variable array for bullets storage.
const bulletsArray = [];

// !!!!The Air-Planes Controls!!!!
function planeComands(e) {
  // The down arrow-key.
  if (e.keyCode == 40) {
    if (parseInt($("#plane").style.top) > 850) return;
    bottom += 10;
    // console.log("hi")
    $("#plane").style.top = bottom + "px";
    // console.log("Hello");
  }
  // The up arrow-key.
  if (e.keyCode == 38) {
    if (parseInt($("#plane").style.top) < 0) return;
    bottom -= 10;
    $("#plane").style.top = bottom + "px";
  }
  // The F-Key.
  if (e.keyCode == 70) {
    bulletsArray.push($("#shot"));
    globalStateShot.shooting = setInterval(() => {
      shot();
      // console.log("shooting");
    }, 30);
  }
}
// A function Designed for the bullets direction and rate of speed.
function shot() {
  $("#shot").textContent = "•";
  bullet += 5;
  console.log("bullet");
  $("#shot").style.left = bullet + "px";
}

// !!!!Targets!!!!
let target = (document.createElement("img").src = "./assets/images/target.png");
let tScore = 10;

function targets() {}

// !!!!Pausing the game!!!!
