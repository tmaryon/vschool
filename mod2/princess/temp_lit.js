var p = {
    firstName: "Toby",
    lastName: "Rogerson",
    age: 55,
    job: "Hitman",
    alive: true,
    favColor: "Chartreuse",
    hobbies: ["Quilting", "Bridge", "Choir Music"],
}

// regular string concatenation
console.log("\n\nMy name is " + p.firstName + " " + p.lastName + ".  I am " + p.age + " years old, and am a " + p.job + ".")  
console.log("My favorite color is " + p.favColor + " and my hobbies are " + p.hobbies + ", and nudism.\n\n")

// tempate literals: `` replaces "", and use ${variable_name} instead of + and " ".  Also, recognizes spaces/punctuation.
console.log(`My name is ${p.firstName} ${p.lastName}.  I am ${p.age} years old, and am a ${p.job}.`)  
console.log(`My favorite color is ${p.favColor}, and my hobbies are ${p.hobbies}, and nudism.\n\n\n`)
