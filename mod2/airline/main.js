// Add form event listener
document.reserve.addEventListener("submit", showReservation)

// Display reservation
function showReservation(e) {
    // prevent default
    e.preventDefault()
    const fName = document.reserve.fName.value
    const lName = document.reserve.lName.value
    const gender = document.reserve.gender.value
    const age   = parseInt(document.reserve.age.value)
    const destination = document.reserve.destination.value
    const diet = []
    for(let i = 0; i < document.reserve.dietary.length; i++) {
        if(document.reserve.dietary[i].checked) {
            diet.push(document.reserve.dietary[i].value)
        }
    }

    alert("First Name: " + fName + "\nLast Name: " + lName + "\nGender: " + gender + "\nAge: " + age + 
    "\nDestination: " + destination + "\nDietary Restriction: " + diet.join(", "))
}