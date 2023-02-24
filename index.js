let addBtn = document.querySelector('.todo button')
let todo = document.querySelector('input')


const editTodo = (e) => {
    todo.value = e.target.parentNode.previousSibling.innerText
    removeTodo(e)
}

const removeTodo = (e) => {
    e.target.parentNode.parentNode.remove()
}

const addTodo = (todo) => {
    let ul = document.querySelector('.todolist')

    let div = document.createElement('div')
    let li = document.createElement('li')

    let removeBtn = document.createElement('button')
    removeBtn.className = 'remove'
    removeBtn.textContent = 'Delete'
    removeBtn.addEventListener('click',removeTodo)

    let editBtn = document.createElement('button')
    editBtn.className = 'edit'
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click',editTodo)

    let div2 = document.createElement('div')
    div2.appendChild(editBtn)
    div2.appendChild(removeBtn)

    li.textContent = todo
    div.className = 'todolistitem'

    div.appendChild(li)
    div.appendChild(div2)
    
    ul.appendChild(div)
   
   
}



addBtn.addEventListener('click',(e) => {
    e.preventDefault()
    if(todo.value == ''){
        alert('please write a todo before submitting')
    }
    else{
        addTodo(todo.value)
    }
    todo.value = ''
})

