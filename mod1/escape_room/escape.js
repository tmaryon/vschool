/* - - - - - - - - - - 
*  Assignment: Escape Room
*  Module 1
*  Taylor Maryon
*  V School
*/

// Includes //
const rl = require("readline-sync"); 

// Variables //
const situation     = "You are trapped in a room.  Inside, you see a key, a hole in the wall, and a locked door.";
const playerOptions = "(Grab) the key, (Put) your hand in the hole, (Unlock) the door";
var doorLocked = true;
var playerAlive = true;
var hasKey = false;

// Functions
function getKey() {
    console.log("You have the key!")
    return hasKey = true;
}

function reachHole() {
    return playerAlive = false;
}

function unlockDoor () {
    return doorLocked = false;
}

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
    return "defined"
}

// Main
clear(); // clear upon exec
while(doorLocked === true && playerAlive === true) {
    console.log(situation);
    console.log(playerOptions);
    if (hasKey === true) {
        console.log("You have the key!")
    }
    const playerAction  = rl.question("What would you like to do: ");
    if (playerAction === "Put") {
        console.log("You touch a poison spike and die.  RIP.")
        reachHole();
        break;
    } else if (playerAction === "Grab") {
        getKey();     
    } else if (playerAction === "Unlock") {
        console.log("You unlock the door and escape!")
        unlockDoor();
        break;
    } else {
        console.log("Please choose again, and type the action in parenthesis.");
    }    
    clear();
}