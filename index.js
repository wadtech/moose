var robot = require("robotjs");

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

//Get the mouse position, returns an object with x and y.
var mouse  = robot.getMousePos();
var screen = robot.getScreenSize();

console.log("THERE'S A MOOSE IN THE HOOSE");

for(;;) {
  robot.moveMouseSmooth(randomInt(0, screen.width), randomInt(0, screen.height));
}
