/* 
    POST with Axios
    NOTE: See EOF for TODO object format

*/

// create form variable 
const form = document.todoForm;
// create an eventListener for the Submit button
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // new todo to be added
    // values captured from todoForm
    const postTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    // Post the todo
    axios.post("https://api.vschool.io/taylormaryon/todo", postTodo)
        .then(resp => console.log(resp.data))
        .catch(err => alert(resp.data))

})

// output the names of todos as <h3> elements
getTodos = () => {
axios.get("https://api.vschool.io/taylormaryon/todo")
    .then(resp =>  {
        for(let i = 0; i < resp.data.length; i++) {
            // for list purposes; starts at 1
            j = i + 1
            // display the title as an <h3>
            const h3 = document.createElement('h3')
            h3.textContent = `${j}. ${resp.data[i].title}`
            document.body.append(h3)
            // display the description as a <p>
            const p = document.createElement('p')
            p.textContent = resp.data[i].description
            document.body.append(p)
            /* NOTE: Chrome doesn't like this, AT ALL */
            // const img = document.createElement('img')
            // img.setAttribute("src", resp.data[i].imgUrl)
            // img.setAttribute("width", "50px")
            // document.body.append(img)
        }    
        getAllTodos()
    })
    .catch(err => console.log(err))
}
getTodos()

/* 
    GET ALL Todos
*/
getAllTodos = () => {
    axios.get("https://api.vschool.io/taylormaryon/todo")
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
}


// Todo object
// {
//     title: "New Todo",
//     description: "A new TODO, for learning Axios",
//     price: 0,
//     imgUrl: "https://unsplash.com/photos/p6g6S_kXkFc",
//     completed: false
// }