const inputItem = document.querySelector('input');
const addBtn = document.querySelector('.add-btn');
const itemsDiv = document.querySelector('.todo-list-items')

const date = document.getElementById('date-select');

const todoList = []

const todo = document.querySelector('.todo')
const dateTodo = document.querySelector('.date')

const getInputData = () =>{
    const itemAdded = inputItem.value
    todoList.push(itemAdded)
    inputItem.value = ''
    todo.textContent = todoList[0]
    dateTodo.textContent = date.value
    

    // itemsDiv.innerHTML = ''; 
    // todoList.forEach(element => {
    //     const p = document.createElement('p');
    //     p.textContent = element;
    //     itemsDiv.appendChild(p)
    // });
}

addBtn.addEventListener('click', getInputData)