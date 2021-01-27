console.log("OK");

//store background classes
const backgrounds = ["bg0", "bg1", "bg2"];

//Get random numbers
var numRand;
numRand = Math.floor(Math.random() * backgrounds.length);

//Get element
let pageBackgound = document.querySelector("body");

//Set class name from stored values
pageBackgound.className = backgrounds[numRand];
