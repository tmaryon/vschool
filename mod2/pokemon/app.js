/* Pokemon List - AJAX/HTTP exercise */

// create xhr instance
const xhr = new XMLHttpRequest()

// GET the resource, w/ async
xhr.open("GET", "https://api.vschool.io/pokemon", true)
// send the request
xhr.send()

/*  xhr onreadystatechange() method 
    captures jsonData as responseText(),
    parses and prepares for showData()
*/
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText
        const data = JSON.parse(jsonData)
        console.log(data.objects[0].pokemon)
        showData(data.objects[0].pokemon)
    }
}

/* 
    showData() :: create, fill, and append html elements to DOM
    parameters: arr (array)
    textContent filled by .name and .resource_uri from vschool's
    Pokemon API
    OPTIONAL CHANGE: accept 2nd argument "element", which defines
    what element will be created
*/
showData = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i].name) // check results
        const h3 = document.createElement('h3')
        h3.textContent = `Name: ${arr[i].name}, Details: ${arr[i].resource_uri}`
        document.body.appendChild(h3)
    }
}