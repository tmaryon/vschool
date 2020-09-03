// Catch Me if You Can
// Mod 2.27.5

function sum(x, y){
    // check data types first and throw error
    try {
        if (typeof(x) !== 'number') throw new Error("x is not a number!")
        if (typeof(y) !== 'number') throw new Error("y is not a number!")
    }
    // output the error message
    catch(err) {
        console.log(err.message)
    }
    // return sum
    return "sum: " + (x + y)
}

console.log(sum(5, "x"))
console.log(sum(5, 2))