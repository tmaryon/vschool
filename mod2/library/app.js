/*  promise sandbox */
//  functions, and class/methods for
//  GET, POST, PUT, and DELETE in the
//  V School API.  Also, practice for 
//  creating <li> elements

// target <ul> by ID
const ul = document.getElementById('list');
// target <div> by ID
const div = document.getElementById('element');
// create <li>
const li = document.createElement('li');

// create xhr
const xhr = new XMLHttpRequest();
// GET, target API, and async === true
xhr.open("GET", "https://api.vschool.io/taylormaryon/todo", true);
// send request
xhr.send();
// state change / status conditional
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // fetch json
        const jsonData = xhr.responseText;
        // uncomment to check results
        // console.log('JSON: ' + jsonData);
        const data = JSON.parse(jsonData);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        console.log(xhr.responseText)
    }
}


// adds an element to target ID, type of element determined by parameter (str),
// and content parameter defines text
addElement = (id, element, content) => {
    // target id
    const idName = document.getElementById(id);
    // define element type for rendering
    const elementType = document.createElement(`${element}`);
    // set textContent
    elementType.textContent = content;
    // append to ID
    idName.append(elementType)
}

testArray = ['item 1', 'item 2', 'item 3']

// test addElement w/ array of <li>s
for (let i = 0; i < testArray.length; i++) {
    addElement('list', 'li', testArray[i])
}

getAll = () => { 
    // GET, target API, and async === true
    xhr.open("GET", "https://api.vschool.io/taylormaryon/todo");
    // send request
    xhr.send();
    // state change / status conditional
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // fetch json
            const json = xhr.responseText;
            console.log(`JSON: ${json}`)
            const data = JSON.parse(json);
            console.log(`Data: ${data}`);
        }
    }
}
getAll()