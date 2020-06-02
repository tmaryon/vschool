/* 
Assignment: Module 0 - Final Project
Name */

let numbers = [1, 2, 3, 4, 5, 6, 34, 23, 60, 44, 43579];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " is even!");
    } else if (numbers[i] % 2 === 1) {
        console.log(numbers[i] + " is odd!");
    } // end conditional evaluations
} // end for loop
