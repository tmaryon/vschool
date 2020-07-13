const readline = require("readline-sync");
const readnum = require('prompt-sync')({sigint: true});

const num1   = + readline.question('Please enter your first number: ');
const num2   = + readline.question('Please enter your second number: ');
const oper   = readline.question('Please enter the operation to perform: add, sub, mul, div: ');
	
calcAnswer(num1, num2, oper);

function calcAnswer(num1, num2, oper) {
  console.log("The answer is: ");
	if (oper === "add") {
		return console.log((num1 - 0) + (num2 - 0));
	} else if (oper === "sub") {
		return console.log(num1 - num2);
	} else if (oper === "mul") {
		return console.log(num1 * num2);
	} else if (oper === "div") {
		return console.log(num1 / num2);
	} else {
		console.log("Invalid operator choice.");
	}
}



