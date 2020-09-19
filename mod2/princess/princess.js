//----- ASSIGNMENT ----------------------------// 
/* Name:    The Princess is in Another Castle  //
/* Author:  Taylor Maryon                      //
/----------------------------------------------*/

//----- CLASS & VARIBLE DECLARATIONS ----------//
class Player {
    // create construtor and defaults
    constructor (name = "Mario", totalCoins = 0, status = "Small", hasStar = false, gameActive = true) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }
    //----- CLASS FUNCTIONS -------------------//
    addCoin = () => {
        this.totalCoins++   // add 1 coin
        return this.totalCoins
    }   // end addCoin()
    
    gotHit = () => {
        // modify current status (-)
        if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Small") {
            console.log(`${this.name} has died!`)   // message
            this.status = "Dead"                    // for display only
            this.gameActive = false;                // ends game
        } else if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Star") {
            console.log(`${this.name} was protected by the star!`)  // message
            this.status = "Powered Up"                              // display
            this.hasStar = false                                    // change star bool
        }
        return this.status; // return status
    }   // end gotHit()
    
    gotPowerup = () => {
        // modify current status (+)
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            console.log(`${this.name} got a star!`)
            this.status = "Star"   // for display
            this.hasStar = true;    // changes star boolean
        } else if (this.status === "Star") {
            this.status = "Powered Up"; // remove the star
            this.hasStar = false;       // set star bool    
        }
        return this.status; // return status
    }   // end gotPowerup()

    print = () => {
        console.log(`Player: ${this.name}`)
        console.log(`Status: ${this.status} `)
        console.log(`Coins:  ${this.totalCoins}\n`)
    }   // end print()
}   // end class

//----- FUNCTIONS -----------------------------//

randomRange = () => {
    let randomNum = Math.round(Math.random() * 2);
    // uncomment to debug:
    // console.log(`Random Num: ${randomNum}`)
    if (randomNum === 0) {
        newPlayer.gotHit();
    } else if (randomNum === 1) {
        newPlayer.gotPowerup();
    } else if (randomNum === 2) {
        newPlayer.addCoin();
    }
    newPlayer.print();
}

debug = (select) => {
    if (select === true) {
        var i = 0;
        while (i < 10) {
            i++;
            randomRange();
            if (newPlayer.gameActive === false) {
                break;
            }
        }
    }
}

//----- MAIN ----------------------------------//

    // instantiate new player class
    let newPlayer = new Player("Luigi", 0, "Small", false);
    // set debug to "true" to enable testing/debugging
    debug(false);   
    const runGame = setInterval(randomRange, 1000);
    // TODO: END THE BLOODY INTERVAL if newPlayer.gameActive === false!  HOW?!