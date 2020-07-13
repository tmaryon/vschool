var li = document.getElementsByClassName("day");

// check for values
for (let i = 0; i < li.length; i++) {
    console.log(li[i]);
}
let day;
for(let i = 0; i < li.length; i++){
    li[i].addEventListener('click', function(){
        day = li[i].textContent;
        console.log(day);
        return day;
})
}

let testOne = "test";
document.getElementById("result").textContent = testOne;
