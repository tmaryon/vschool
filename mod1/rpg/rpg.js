// Include
const rl = require("readline-sync");

// Define and declare
// monster class
class Monster { 
    constructor(name, hitPoints, treasure) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.treasure = treasure;
    }
}

const startMsg = " Greetings, adventurer!  You awake in a dimly-lit stone room with a rotting\n \
wooden door ahead of you.  As you stand up, you discover that you've fallen into\n \
the dungeon beneath an ancient castle.  The sounds of unknown monsters echo through\n \
the corridor ahead of you.";
var playerAlive = true;
const monsters = []; // init monsters
const orc = new Monster("Orc", 50, "Dagger");
const vampire = new Monster("Vampire", 100, "Magic Amulet");
const mindFlayer = new Monster("Mind Flayer", 125, "Crown");
const inventory = ["Torch", "Sword"]; // init inventory
monsters.push(orc, vampire, mindFlayer); // load the monsters array
function Player(name, hitPoints) 
    {
        this.name = "None";
        this.hitPoints = 200;
    };
player = new Player();

// functions
function clear() { // clear the screen
    process.stdout.write('\u001B[2J\u001B[0;0f');
    return "defined";
}

function checkMonsters() {
    const monCount = monsters.length;
    return monCount;
}

function walk() {
    let encChance = Math.round(Math.random() * 100);
    if (encChance > 33) { 
        console.log('\x1b[35m%s\x1b[0m',"You enter an empty room.");
    } else if (encChance < 33) {
        let encVal = Math.floor(Math.random() * monsters.length);
        encounterMonster(encVal);
    }
}

function inventoryList() { // list inventory items
    console.log('\x1b[32m%s\x1b[0m',"Your have the following items: ");
    for (i = 0; i < inventory.length; i++) {
        console.log('\x1b[33m%s\x1b[0m',inventory[i]);
    }
}

function encounterMonster(encVal) { // encounter and choose random monster
    let enc = encVal;
    console.log('\x1b[36m%s\x1b[0m',"You see a " + monsters[enc].name +"!");
    let combatChoice = rl.question("Would you like to (f)ight or (r)un? ");
    if(combatChoice === "f") { fightMonster(encVal); } 
    else if (combatChoice === "r") { fleeMonster(encVal); }
}

function fightMonster(encVal) {
    let enc = encVal;
    console.log('\x1b[32m%s\x1b[0m',"You attack the " + monsters[enc].name);
    while (player.hitPoints > 0 || monsters[enc].hitPoints > 0) {
        let playerHitChance  = Math.round(Math.random() * 100);
        let monsterHitChance = Math.round(Math.random() * 100);
        let playerhitDamage  = Math.round(Math.random() * 25);
        let monsterhitDamage = Math.round(Math.random() * 15);
        if (playerHitChance < 50) {
            console.log('\x1b[32m%s\x1b[0m',"You hit the " + monsters[enc].name + " for " + playerhitDamage + " damage!")
            monsters[enc].hitPoints -= playerhitDamage;
        }
        if (monsters[enc].hitPoints <= 0) {
            console.log('\x1b[32m%s\x1b[0m',"You killed the " + monsters[enc].name + " and picked up a " + monsters[enc].treasure + " from the corpse.");
            inventory.push(monsters[enc].treasure);
            monsters.splice([enc], 1);
            player.hitPoints += 20;
            console.log("Your new inventory: ");
            inventoryList();
            break;
        } else { console.log('\x1b[32m%s\x1b[0m',"You missed the " + monsters[enc].name); }
        if (monsterHitChance < 50) {
            console.log('\x1b[31m%s\x1b[0m',"The " + monsters[enc].name + " hit you for " + monsterhitDamage + " damage!");
            player.hitPoints -= monsterhitDamage;
        }
        if (player.hitPoints <= 0) {
            console.log('\x1b[31m%s\x1b[0m',"The " + monsters[enc].name + "killed you!  RIP.");
            playerAlive = false;
        } else {
            console.log('\x1b[31m%s\x1b[0m',"The " + monsters[enc].name + " missed you!");
        }
    }
}

function fleeMonster(encVal) {
    let runChance = Math.floor((Math.random() * 99) +1);
    let enc = encVal;
    if (runChance < 50) {
        console.log('\x1b[31m%s\x1b[0m',"You fail to run, and the " + monsters[enc].name + " attacks!");
        fightMonster(encVal);
    } else if (runChance > 50) {
        console.log('\x1b[32m%s\x1b[0m',"You ran...you ran so far away.");
    }
}

// main
clear();
console.log('\x1b[31m%s\x1b[0m',startMsg,"\n"); // Starting message
const playerName = rl.question("What is your name? "); // Get player's name
player.name = playerName; // update player object
console.log("\n" + '\x1b[35m%s\x1b[0m',"Greetings, " + player.name + "!  Can you escape the \
dungeon with your life?!\n\n"); // greet the player by name 

while (playerAlive === true || monsters.length <= 0) {
    monRemain = checkMonsters();
    if (monRemain <= 0) {
        console.log('\x1b[31m%s\x1b[0m',"You have slain all enemies and escaped the dungeon!");
        break;
    }
    console.log('\x1b[34m%s\x1b[0m',player.name + " / Hit Points: " + player.hitPoints);
    playerInput = rl.question("Would you like to (w)alk, (c)heck your inventory, or (q)uit: ");
    if (playerInput === "w") {
        walk();
    } else if (playerInput === "q") {
        console.log("Thank you for playing!  Good bye.");
        break;
    } else if (playerInput === "c") { inventoryList(); }    
}

// Colors
/*
FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
*/
