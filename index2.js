let addBtn = document.querySelector('.todo button')
let todo = document.querySelector('input')
let todoArray = []
//dumping all values from  our local storage in our array 
let temp = localStorage.getItem('todos')
if( temp != null){
    todoArray = JSON.parse(temp)
}

const editTodo = (e) => {
    todo.value = e.target.parentNode.previousSibling.innerText
    removeTodo(e)
}

const removeTodo = (e) => {
   e.target.parentNode.parentNode.remove()
   removeLocalStorageValues(e.target.parentNode.parentNode.childNodes[0].innerText)
}

const removeLocalStorageValues = (target) => {
    let tempArr = JSON.parse(localStorage.getItem('todos'))
    
    let res = tempArr.filter((todo) => 
        todo.todo !== target
    )
    localStorage.setItem('todos',JSON.stringify(res))
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


const display = (todoArray) => {
    console.log();
    todoArray.forEach((todo) => {
        addTodo(todo.todo)
    })
}
display(todoArray)

addBtn.addEventListener('click',(e) => {
    e.preventDefault()
    if(todo.value == ''){
        alert('please write a todo before submitting')
    }
    else{
       
        todoArray.push({'todo': todo.value })
        localStorage.setItem('todos',JSON.stringify(todoArray))
        addTodo(todo.value)
    }
    todo.value = ''
})

