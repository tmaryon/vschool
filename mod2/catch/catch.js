// Catch Me if You Can
// Mod 2.27.5
function clear() { // clear the screen
    process.stdout.write('\u001B[2J\u001B[0;0f');
    return "defined";
}
clear()

function sum(x, y){
    // check data types first and throw error
    try {
        if (typeof(x) !== 'number') throw new Error("x is not a number!")
        if (typeof(y) !== 'number') throw new Error(`${y} is not a number!`)
        // return the sum
        // return "sum: " + (x + y) + "\n"
        return x + y;
    }
    // output the error message
    catch(err) {
        console.log(err.message)
    }

}

console.log(sum(5,2));
console.log(sum(5, "x"))
//console.log(sum(5, 2))

var user = {username: "sam", password: "123abc"};
function login(username, password) {
    //check credentials
    console.log('\x1b[32m%s\x1b[0m',"Attempting login...")
    try {
        if (username !== "sam") throw new Error("Error: Username incorrect.  Please try again.\n")
        if (password !== "123abc") throw new Error("Error: Password incorrect.  Please try again.\n")
        console.log('\x1b[33m%s\x1b[0m',"Login Successful!\n")         
    }

    catch(err) {
        console.log(err.message)
    }

}

login("sam", "321zyx");
//login("bob", "123abc");
login("sam", "123abc");