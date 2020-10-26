// const axios = new Axios();

// get all 
axios.get("https://api.vschool.io/taylormaryon/todo")
    .then(resp =>  {
        for(let i = 0; i < resp.data.length; i++) {
            const cont = document.getElementById('container')
            const div = document.createElement('div')
            div.textContent = resp.data[i].title
            cont.append(div)
        }    
        
    })
    .catch(err => console.log(err))






// get individual
axios.get("https://api.vschool.io/taylormaryon/todo/5f711ebda269067180b0f1b9")
    .then(resp => console.log(resp.data))
        const indiv = document.getElementById('container')
        const h3 = document.createElement('h3')
        h3.textContent = resp.data
        cont.append(h3)
        console.log(resp.data)
    .catch(err => console.log(err))
