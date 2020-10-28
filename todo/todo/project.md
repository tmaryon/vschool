# Axios Todo Project 
### Taylor Maryon (@tmaryon)

### **ISSUES**
- **NOTE:** see Issues tab on GitHub
- ~new todos not displaying~
- ~css/js: styling not applying to `todoCont` entries~
- ~css/js: no spacing between todos~
- ~js: `eventListener` for `todoButton` not properly calling `rmTodo()`~
- js: `rmTodo()` doesn't perform `DELETE`, but removes the container on `index.html`
- js: `eventListener` for creating new todo using submit form/button on `index.html`
- js: `eventListener` for `checkbox` doesn't apply `.completed` class to `.colOne`


### TODO tasks:

**index.html**:
- HTML 5 compliant
- `<link>` to `/assets/css/style.css`
- create `<div class='container'>`; append new todos inside
- `<script>` source: /assets/js/app.js

**/assets/js/app.js**
- Todo class:   class for creating new todos
- `getAll()`:     get all todos from V School API
- `createTodo()`: 
    - create todos using `GET` data
    - create a new container for each todo
    - append todos to `.container` in `index.html`
    - add `eventListener` for form submit button in `index.html`
    - creates new todos using form input from `index.html`
    - reference `rmtodo()` to function, for deleting todos via button
    - add `eventListener` for `checkBox`
    - perform `PUT` or call `completeTodo()` when `checkBox` is checked 

- `rmTodo()`:     
    - `DELETE` todo from Vschool API based on `_id`
    - remove `todoCont` for todo container from `index.html`

- `completeTodo()`:
    - change `completed` to `true` with a `PUT` request to V School API
    - add `.completed` class to `.colOne` inside of `todoCont` 
    - OPTIONAL: change color of `todoCont` to green, to indicate completed

**/assets/css/style.css**

`.container`:   container on `index.html`
`.completed`:   strikethrough text 
`.todoCont`:    todo container for all items; uses `flex` display
`.colOne`:      flex column for todo fields
`.colTwo`:      flex column for `Delete` button and `Completed` checkbox
`.delButton`:   styling for `Delete` button
