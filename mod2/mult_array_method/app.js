/* 
Multiple Array Methods
Module 2.26
*/

// define/initialize
var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];

// function(s)
function sortedOfAge(arr) {
    return arr.filter(person => person.age >= 18)
    .sort((a, b) => a.lastName.localeCompare(b.lastName))
    .map((person) => {
        return `${person.firstName} ${person.lastName} is ${person.age}.`
    })   
}
    
// main
console.log(sortedOfAge(peopleArray))
