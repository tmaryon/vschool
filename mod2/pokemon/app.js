/* Pokemon List - AJAX/HTTP exercise */

// create xhr instance
const xhr = new XMLHttpRequest()

// GET the resource, w/ async
xhr.open("GET", "https://api.vschool.io/pokemon", true)
// send the request
xhr.send()

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText
        const data = JSON.parse(jsonData)
        console.log(data.objects[0].pokemon)
        showData(data.objects[0].pokemon)
    }
}

showData = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i].name) // check results
        const h3 = document.createElement('h3')
        h3.textContent = `Name: ${arr[i].name}, Details: ${arr[i].resource_uri}`
        document.body.appendChild(h3)
    }
}