/*
const oldObj = {
	name: frank,
	age: 43


}

// includes key/value pairs for oldObj, only edits values for age
const edited {
	...oldObj,
	age: oldObj.age +1
} */


// will add all numbers as arguments (which will be an array)
// rest (...) will only be used in function parameters
function addNumbers(...nums) {
	return nums.reduce((sum, num)=>num + sum);
}

// first and second will not be included in nums.reduce, 
// because only number in nums array is 7
function addNumsRest(first, second, ...nums) {
	return nums.reduce((sum, num)=>num + sum);
}

console.log(addNumbers(3,5,7));
console.log(addNumsRest(3,5,7));

// arrow function
const addNumArrow = (...nums) => {
	return nums.reduce((sum, num)=>num + sum);
}

console.log(addNumArrow(5,10,15));


const numsTwo = [5, 10, 15];
// explicit return
console.log(numsTwo.map(num => {
	return num * 2;
}));

//implicit return
console.log(numsTwo.map(num => num * 2));



