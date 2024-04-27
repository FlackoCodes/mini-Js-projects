const inputItem = document.querySelector('input');
const addBtn = document.querySelector('.add-btn');
const itemsDiv = document.querySelector('.todo-list-items');

const date = document.getElementById('date-select');


const dateTodo = document.querySelector('.date');
const tododiv = document.querySelector('.todo-list')

const todoList = [
    {name:'get the job', doDate: '2024-08-30'},
    { name:'go to Oda', doDate: '2024-09-30' }
];

const renderTodo = () =>{
    let allHtml = ""

    todoList.forEach((element, index) => {
        const todoObject = element;
        const {name, doDate} = todoObject
        const html = `
        <div>${name}</div>
        <div>${doDate}</div>
        <button class="del-btns" data-index = ${index}
        ">Delete</button>
        </div>
        `
        allHtml+= html
});

    tododiv.innerHTML = allHtml;

}

renderTodo()


const addToList = () =>{
   const todoItem = inputItem.value;
   const itemDate = date.value
   todoList.push({name:todoItem, doDate:itemDate});
   console.log(todoList);
   inputItem.value = "";
   date.value = ""
   renderTodo()

}

const delTodo = (index) =>{
    todoList.splice(index, 1)
    renderTodo()
}

const checkIndex = (e) =>{
    if (e.target.classList.contains('del-btns')) {
        const index = parseInt(e.target.dataset.index)
        delTodo(index)
    }
}

tododiv.addEventListener('click', checkIndex)
addBtn.addEventListener('click', addToList);



