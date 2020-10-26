/* 
    PUT in Axios
    NOTE: See EOF for Todo object format
*/

/* VARIABLES */

/* FUNCTIONS */

// GET all Todos (console)
getAllTodos = () => {
    axios.get("https://api.vschool.io/taylormaryon/todo")
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
}

/* MAIN */
axios.put("https://api.vschool.io/taylormaryon/todo/_id")

// Todo object
// {
//     title: "New Todo",
//     description: "A new TODO, for learning Axios",
//     price: 0,
//     imgUrl: "https://unsplash.com/photos/p6g6S_kXkFc",
//     completed: false
// }