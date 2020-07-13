var person = {
    name: ["Toby", "Ricardo"]
    };

var para = "This is a Paragraph";
document.querySelector(".set1").textContent = para;

var divOne = document.querySelector(".set2");
divOne.textContent = person.name[0];

var divTwo = document.querySelector(".set3");
divTwo.textContent = person.name[1];