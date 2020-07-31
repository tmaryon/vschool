const data = [3, 5, 6, 8, 9];
const dataTwo = [4, 10, 3, 5];
const allData = data.concat(dataTwo, [20, 21]);

console.log(Math.max(...allData));
