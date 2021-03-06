/* VARAIBLES/CLASSES */

// New Todo form
const form = document.todoForm

// Todo class -- used to construct each Todo
class Todo {
    /**
     * @param {String} title 
     * @param {String} description 
     * @param {Number} price 
     * @param {String} imgUrl 
     * @param {Boolean} completed 
     */
    constructor(title, description, price, imgUrl, completed=false) {
        this.title       = title
        this.description = description
        this.price       = price
        this.imgUrl      = imgUrl
        this.completed   = completed    
    }
}

/* FUNCTIONS */

// GET all todos from V School Todo API
const getAll = () => {
    axios.get("https://api.vschool.io/taylormaryon/todo")
    // Handle GET request
    .then(resp =>  {
        // Iterate through GET items; could map or reduce be used here?
        for(let i = 0; i < resp.data.length; i++) {
            /* Call createTodo() for each array object in resp.data */
            createTodo(resp.data[i]._id, resp.data[i].title, resp.data[i].description, 
            resp.data[i].price, resp.data[i].imgUrl, resp.data[i].completed);
            console.log(resp.data[i]) // uncomment to verify
        }    
    })
    // Throw error if GET fails
    .catch(err => console.log(err))
}

// Add a Todo
function createTodo(id, title, description, price, imgUrl, completed=false) {
    // assign, but do not use, _id
    const todoID = id
    // console.log(`todoID: ${todoID}`) // uncomment to verify
    const divContain = document.getElementById('container')
    // create todo container and two column divs
    const todoCont      = document.createElement('div')
    todoCont.className  = 'todoCont'
    const colOne        = document.createElement('div')
    colOne.className    = 'colOne'
    const colTwo        = document.createElement('div')
    colTwo.className    = 'colTwo'
    todoCont.appendChild(colOne)
    todoCont.appendChild(colTwo)
    divContain.appendChild(todoCont)
    // Column one items
    const titleDiv      = document.createElement('p')
    titleDiv.innerText  = `Title: ${title}`
    const descDiv       = document.createElement('p')
    descDiv.innerText   = `Description: ${description}`
    const priceDiv      = document.createElement('p')
    priceDiv.innerText  = `Price: ${price}`
    const complDiv      = document.createElement('p')
    complDiv.innerText  = `Completed: ${completed}`
    const imgUrlDiv     = document.createElement('img')
    imgUrlDiv.src = imgUrl
    imgUrlDiv.style.paddingTop = '15px'
    imgUrlDiv.style.width = '100px'
    imgUrlDiv.style.height = '100px'
    colOne.appendChild(titleDiv)
    colOne.appendChild(descDiv)
    colOne.appendChild(priceDiv)
    colOne.appendChild(complDiv)
    colOne.appendChild(imgUrlDiv)
    // Column two items
    const todoForm      = document.createElement('form')
    // create span for the button
    const spanCheckbox     = document.createElement('span')
    spanCheckbox.innerText = 'Completed: ' 
    // create span for checkbox text
    const spanText      = document.createElement('span')
    const todoButton    = document.createElement('button')
    const checkBox      = document.createElement('input')
    checkBox.setAttribute("type", "checkbox")
    checkBox.todoForm // ?
    // for new Todos, if 'completed === true'
    // add .completed class to checkBox
    // also, check the box
    // if (completed === true) {
    //     checkBox.className = 'completed'
    //     checkBox.checked
    // }
    todoButton.className = 'delButton'
    todoButton.innerText = "Delete Todo"
    colTwo.appendChild(todoForm)
    todoForm.appendChild(todoButton)
    // add span for checkbox
    // add span for checkbox text
    todoForm.appendChild(spanCheckbox)
    spanCheckbox.appendChild(checkBox)
    // add delete button method
    // todoButton is button variable in Todo
    // todoCont is the todo div container
    rmTodo(todoID, todoButton, todoCont)
    checkBox.addEventListener("click", (e) => {
        /*
            when the checkbox is checked, add the '.completed' class to
            the Todo, and run a PUT on the _id
            Would it be easier to create an additional function to call 
            outside of createTodo() for these actions?
        */
        
        if (e.target.checked) {
           // add .completed class
           // try classList.toggle()
           colOne.classList.add('completed')
           
           // change completed = true w/ PUT
        } else {
           // if unchecked
           colOne.classList.remove('completed')
        }
    })

}

// POST a new Todo to V School API
// Note: see VARAIBLES for declaration of form

// const addTodo = (id, title, description, price, imgUrl, completed=false) => {
//     createTodo(id, title, description, price, imgUrl, completed)
    
    
// }

// const completeTodo = id => {
    
//     axios.put()
//     // strikethrough
// }



// Remove a Todo from V School API with DELETE
const rmTodo = ((id, delButton, todoItem) => {
    // delButton event listener
    delButton.addEventListener('click', ()=> {
        // DELETE from API
        axios.delete("https://api.vschool.io/taylormaryon/todo/" + id)
            .then(resp => console.log(resp))
            .catch(err => alert(err))
        todoItem.remove()
    })
    // remove ze container.  SCHNELL!
    
})

/* MAIN */

// eventListener for todoForm <submit> button
// Add new item to V School Todo API
form.addEventListener('submit', (e) => {
    // new Todo instance
    e.preventDefault()
    const newTodo = new Todo(form.title.value, form.description.value, 
        form.price.value, form.imgUrl.value, false)
    console.log(newTodo)
 
    // Post the todo
    axios.post("https://api.vschool.io/taylormaryon/todo", newTodo)
        .then(resp => console.log(resp.data))
        .catch(err => alert(resp.data))
}) 

// GET todo items from V School Todo API
getAll()


/* REFERENCE */

/*
     * @param {String} title 
     * @param {String} description 
     * @param {Number} price 
     * @param {String} imgUrl 
     * @param {Boolean} completed 
*/

// Todo object
// {
//     title: "New Todo",
//     description: "A new TODO, for learning Axios",
//     price: 0,
//     imgUrl: "https://unsplash.com/photos/p6g6S_kXkFc",
//     completed: false
// }

/* EOF */
