// Add
// event listener
document.sum.addEventListener("submit", addNums)
// Function (use 'e' to enable preventDefault)
function addNums(e) {
    e.preventDefault()
    const num1 = parseInt(document.sum.addNumOne.value); // one method (int)
    const num2 = Number(document.sum.addNumTwo.value); // another method (int), also '+document.sum...'
    document.getElementById("addResult").textContent = "Result: " + num1 + num2 
}

// Subtract
document.difference.addEventListener("submit", subNums)
function subNums(e) {
    e.preventDefault()
    const num1 = parseInt(document.difference.subNumOne.value);
    const num2 = parseInt(document.difference.subNumTwo.value);
    document.getElementById("diffResult").textContent = "Result: " + num1 - num2
}

// Multiply
document.product.addEventListener("submit", mulNums)
function mulNums(e) {
    e.preventDefault()
    const num1 = parseInt(document.product.mulNumOne.value);
    const num2 = parseInt(document.product.mulNumTwo.value);
    document.getElementById("prodResult").textContent = "Result: " + num1 * num2
}