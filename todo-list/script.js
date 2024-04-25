const inputItem = document.querySelector('input');
const addBtn = document.querySelector('.add-btn');
const itemsDiv = document.querySelector('.todo-list-items')



const todoList = []

const getInputData = () =>{
    const itemAdded = inputItem.value
    todoList.push(itemAdded)
    inputItem.value = ''

    itemsDiv.innerHTML = ''; 
    todoList.forEach(element => {
        const p = document.createElement('p');
        p.textContent = element;
        itemsDiv.appendChild(p)
    });
}

addBtn.addEventListener('click', getInputData)