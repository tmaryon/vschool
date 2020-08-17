// event listener/func call
document.getElementById("clicker").addEventListener("click", countClicks, true)
// count the clicks 
let click = 0
function countClicks() {
    click++
    document.getElementById("results").textContent = "Total Clicks: " + click
    localStorage.setItem("click", click)
    //console.log(click)
    console.log(document.body.innerText)
}
