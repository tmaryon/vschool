/* 
Assignment: Module 0 - Final Project
Name: Taylor Maryon
html file(s): index.html 
css file(s): style.css
function(s): showColors(), showName()
*/



var colors = ["red", "yellow", "green", "blue", "purple"];
var person = {
    name: "Taylor",
    city: "Salt Lake City",
    stars: ["Sirius", "Pollux", "Capella", "Polaris"]
};

function showColors() {
    if (colors.length > 0) {
        for (i = 0; i < colors.length; i++) {
            alert(colors[i]);
        }
    } else {
        alert("Error.  No colors in array!")
    }
}

function showStars() {
    alert(person.stars);
}

/*
function displayStars() {
    document.getElementById
}
*/