/* 
    DELETE with Axios
*/

axios.delete("https://api.vschool.io/todo")
    .then(resp => console.log(resp))
    .catch(err => alert(err))



/* Example of a Delete button eventListener:

button.addEventListener("click", function(){
    axios.delete("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})

*/


// get individual todo
// axios.get("https://api.vschool.io/taylormaryon/todo/_id")
//     .then(resp => console.log(resp.data))
//     .catch(err => console.log(err))