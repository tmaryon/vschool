/* --------------------------------------------*
* Assignment: Princess is in Another Castle!
* Module: 2.54.5
* Author: Taylor Maryon
* ---------------------------------------------*/

// Define (var, arr, obj, class) //

class Player {
    // /**
    //  * // JS Doc -- research
    //  * @param {String} name 
    //  * @param {Number} totalCoins 
    //  * @param {String} status 
    //  * @param {Boolean} hasStar 
    //  */
    
    constructor(name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    } // end constructor
    
    setName = (namePicked) => { 
        this.name = namePicked;
    }
    
    gotHit = () => {
        // this.status = status;
        if (this.status === "Powered Up") {
            this.status === "Big";
        } 
        if (this.status === "Big") {
            this.status === "Small";
        } 
        if (this.status === "Small") {
            this.status === "Dead";
            this.gameActive === false;
        } 
        if (this.hasStar === true) {
            this.status === status;
        }
        console.log(`gotHit: ${this.status}`)
        return this.status;
    }
    gotPowerup = () => {
        
        // if (this.status === "Powered Up") {
        //     this.hasStar === true; }
        if (this.status === "Big") {
            this.status === "Powered Up";
        } if (this.status === "Small") {
            this.status === "Big";
            console.log(`gotPowerup: ${this.status}`)
            return this.status;
        }
    }
    addCoin = () => {
        this.totalCoins++;
        return this.totalCoins;
    }
    print = () => {
        console.log(`Player: ${this.name}`);
        console.log(`Status: ${this.status}`);
        console.log(`Coins: ${this.totalCoins}`);
        console.log("\n");
    }
} // class

randomRange = () => {
    let randomNum = Math.round(Math.random() * 2);
    console.log(`Random Num: ${randomNum}`)
    if (randomNum === 0) {
        newPlayer.gotHit();
    } else if (randomNum === 1) {
        newPlayer.gotPowerup();
    } else if (randomNum === 2) {
        newPlayer.addCoin();
    }
    newPlayer.print();
}
// new instance
let newPlayer = new Player("Mario", 0, "Big", false);

// setInterval & clearInterval
randomRange();
// newPlayer.addCoin();
// newPlayer.gotPowerup();
