//reduce exercises

// sum numbers
function total(arr) {
    return arr.reduce((final, num) => final += num, 0)
}
//test
console.log(total([1,2,3,5,6,7,8,9,10])); // 6

// string concat
function stringConcat(arr) {
    return arr.reduce((final, num) => final.concat(num), "")
}
// test
console.log(stringConcat([1,2,3])); // "123"

function totalVotes(arr) {
    return arr.reduce((final, voter) => final += voter.voted, 0)
}
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7

 function shoppingSpree(arr) {
    return arr.reduce((final, total) => final += total.price, 0)    
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); // 227005

 function flatten(arr) {
    return arr.reduce((final, newArr) => final.concat(newArr), [])    
 }
 // Flatten Array
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 // Test
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

 // Name and if Voted
 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce((final, voter) => {
        if(voter.age > 18 && voter.age < 25 && voter.voted === true) {
            final.numYoungVotes++
        }
        if (voter.age > 18 && voter.age <= 25) {
            final.numYoungPeople++
        }
        if (voter.age > 25 && voter.age <= 35 && voter.voted === true) {
            final.numMidVotes++
        }
        if (voter.age > 25 && voter.age <= 35) {
            final.numMidPeople++
        }
        if (voter.age >= 36 && voter.voted) {
            final.numOldVotes++
        }
        if (voter.age >= 36) {
            final.numOldPeople++
        }
        return final
    }
    ,{numYoungVotes: 0, numYoungPeople: 0, numMidPeople: 0,
    numMidVotes: 0, numOldVotes: 0, numOldPeople: 0})
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/
