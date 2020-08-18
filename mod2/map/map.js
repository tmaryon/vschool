// map array exercises
// Module 2.15

function doubleNumbers(arr) {
    const product = arr.map( (num) => {
        return num * 2
    })
    return product
}

console.log(doubleNumbers([2, 5, 100]))

function stringNumbers(arr) {
        return arr.map ( (num) => {
        return num.toString()
    })
}

console.log(stringNumbers([2, 5, 100]))

function capitalizeNames(arr){
    return arr.map ((str) => {
        // Capitalize first letter
        // Slice & lowercase remainder of string
        return str[0].toUpperCase() + str.slice(1).toLowerCase();  
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

function namesOnly(arr){
    return arr.map ((name) => {
        return name.name
    })
}
  
  console.log(namesOnly([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ])); 

  function makeStrings(arr){
    return arr.map ((matrix) => {
        if (matrix.age >= 80) {
            return matrix.name + " can go to the Matrix!"
        } else {
            return matrix.name + " can't go to the Matrix!"
        }
    })
  }
  
  console.log(makeStrings([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
  ])); 

  function readyToPutInTheDOM(arr){
    return arr.map ((matrixDom) => {
        return "<h1>" + matrixDom.name + "</h1>" + "<h2>" + matrixDom.age + "</h2>"
    })
  }

  console.log(readyToPutInTheDOM([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
  ])); 