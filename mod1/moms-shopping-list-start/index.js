const form = document["addItem"];
form.addEventListener("submit", addItem);

/*function(event) {
    event.preventDefault();
    //console.log("yes");
    let formItem = form.title.value;
    console.log(formItem);
    form.title.value = "";
    const liAdd = document.createElement("li");
    liAdd.textContent = formItem;
    document.getElementsByTagName("ul")[0].append(liAdd);
}); */

function addItem(event) {
    event.preventDefault();
    const formItem = form.title.value;
    console.log(formItem);
    form.title.value = "";
    const liAdd = document.createElement("li");
    const pContent = document.createElement("p");
    pContent.textContent = formItem;
    const xButton = document.createElement("button");
    xButton.textContent = "X ";
    const editButton = document.createElement("button");
    editButton.textContent = "edit ";
    liAdd.append(pContent, xButton);
    document.getElementsByTagName("ul")[0].append(liAdd);
    xButton.addEventListener("click", function() { liAdd.remove(); });
}


var test = document.getElementsByTagName("li");
console.log(test);